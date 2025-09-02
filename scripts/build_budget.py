#!/usr/bin/env python3
"""
Builds the POSE Phase II budget from a YAML spec, computes travel using
GSA per-diem rules when rates are provided (or fetched via API if
GSA_API_KEY is set), and writes:
- docs/pose/budget/budget.md (human-readable)
- site/public/content/budget.json (machine-readable for the site)

NSF categories (aligning to PAPPG budget lines):
- A: Senior Personnel
- B: Other Personnel
- C: Fringe Benefits
- D: Equipment
- E: Travel (domestic/foreign)
- F: Participant Support
- G: Other Direct Costs (Materials & Supplies, Publication, Consultants, Subawards, Computer/Cloud, Other)
- I: Indirect (F&A)

Budget cap: $1,500,000 over 24 months.
"""
from __future__ import annotations

import json
import os
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import yaml
import math
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
BUDGET_YAML = ROOT / "docs" / "pose" / "budget" / "budget.yaml"
OUT_MD = ROOT / "docs" / "pose" / "budget" / "budget.md"
SITE_JSON = ROOT / "site" / "public" / "content" / "budget.json"
BUDGET_CAP = 1_500_000


def usd(amount: float) -> str:
    return f"${amount:,.0f}"


def safe_get(d: dict, *keys, default=None):
    cur = d
    for k in keys:
        if not isinstance(cur, dict) or k not in cur:
            return default
        cur = cur[k]
    return cur


def gsa_perdiem(city: str, state: str, fy: str, month: Optional[int], api_key: Optional[str]) -> Tuple[Optional[float], Optional[float]]:
    """Return (lodging, mie) rates for a city/state in a fiscal year.
    If api_key is missing, or fetch fails, returns (None, None).
    Month is optional; if provided and API supports seasonal lodging, use month.
    """
    if not api_key:
        return None, None
    try:
        # GSA API requires endpoints; use city/state endpoint
        # Docs: https://open.gsa.gov/api/perdiem/
        # Example: /travel/perdiem/v2/rates/city/{state}/{city}?fy=2025
        base = "https://api.gsa.gov/travel/perdiem/v2/rates/city/"
        url = f"{base}{urllib.parse.quote(state)}/{urllib.parse.quote(city)}?fy={urllib.parse.quote(fy)}&api_key={urllib.parse.quote(api_key)}"
        with urllib.request.urlopen(url, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
        # Response: data["rates"][0]... may have monthly lodging dictionary and mie
        rates = data.get("rates", [])
        if not rates:
            return None, None
        rate = rates[0]
        mie = float(rate.get("meals", 0)) if rate.get("meals") else None
        # Lodging could be seasonal; if month provided, try month key like "jan", "feb" etc.
        lodging = None
        seasonal = safe_get(rate, "months")
        if seasonal and isinstance(seasonal, dict) and month:
            # Month 1-12 -> jan...dec
            names = ["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
            mkey = names[month-1]
            lodging = float(seasonal.get(mkey, {}).get("lodging", 0)) or None
        if lodging is None:
            lodging = float(rate.get("lodging", 0)) or None
        return lodging, mie
    except Exception:
        return None, None


def compute_travel(item: dict, api_key: Optional[str]) -> Tuple[float, dict]:
    """Compute travel cost using GSA per diem if rates not provided.
    YAML shape:
    - description: I-Corps cohort
      travelers: 2
      days: 5
      destination: { city: Washington, state: DC, fy: 2025, month: 9 }
      airfare: 800  # per traveler
      lodging_rate: 200  # optional override; if missing, try GSA
      mie_rate: 79       # optional override; if missing, try GSA
    """
    travelers = int(item.get("travelers", 1))
    days = int(item.get("days", 1))
    dest = item.get("destination", {})
    city = dest.get("city")
    state = dest.get("state")
    fy = str(dest.get("fy", "2025"))
    month = dest.get("month")
    lodging_rate = item.get("lodging_rate")
    mie_rate = item.get("mie_rate")
    if (lodging_rate is None or mie_rate is None) and city and state:
        l, m = gsa_perdiem(city, state, fy, month, api_key)
        lodging_rate = lodging_rate if lodging_rate is not None else l
        mie_rate = mie_rate if mie_rate is not None else m
    # Fallbacks if still None
    if lodging_rate is None:
        lodging_rate = 200.0
    if mie_rate is None:
        mie_rate = 79.0

    airfare = float(item.get("airfare", 0.0))
    nights = max(days - 1, 0)
    # M&IE rule: 75% of rate on first and last day
    if days <= 1:
        mie_total = 0.75 * mie_rate
    else:
        mie_total = 0.75 * mie_rate + max(days - 2, 0) * mie_rate + 0.75 * mie_rate
    lodging_total = nights * lodging_rate
    subtotal_per_traveler = airfare + lodging_total + mie_total
    total = travelers * subtotal_per_traveler
    breakdown = {
        "travelers": travelers,
        "days": days,
        "nights": nights,
        "lodging_rate": lodging_rate,
        "mie_rate": mie_rate,
        "airfare": airfare,
        "subtotal_per_traveler": round(subtotal_per_traveler, 2),
        "total": round(total, 2),
        "destination": dest,
    }
    return total, breakdown


def main() -> None:
    if not BUDGET_YAML.exists():
        print(f"Budget YAML not found: {BUDGET_YAML}")
        return
    spec = yaml.safe_load(BUDGET_YAML.read_text()) or {}
    gsa_key = os.environ.get("GSA_API_KEY")

    categories: Dict[str, float] = {}
    details: Dict[str, Any] = {}

    # Initialize categories
    cat_order = [
        "A_senior_personnel",
        "B_other_personnel",
        "C_fringe",
        "D_equipment",
        "E_travel",
        "F_participant_support",
        "G_other_direct",
        "I_indirect",
    ]
    for k in cat_order:
        categories[k] = 0.0
        details[k] = []

    # Simple aggregations for direct cost categories
    for k in ["A_senior_personnel", "B_other_personnel", "C_fringe", "D_equipment", "F_participant_support", "G_other_direct", "I_indirect"]:
        items = spec.get(k, []) or []
        for it in items:
            amt = float(it.get("amount", 0))
            categories[k] += amt
            details[k].append(it)

    # Travel with per-diem computation
    travel_total = 0.0
    travel_breakdowns: List[Dict[str, Any]] = []
    for it in spec.get("E_travel", []) or []:
        total, bd = compute_travel(it, gsa_key)
        travel_total += total
        travel_breakdowns.append({"description": it.get("description"), **bd})
    categories["E_travel"] = travel_total
    details["E_travel"] = travel_breakdowns

    # Compute subtotal (direct) and apply indirect if specified as rate
    direct_total = (
        categories["A_senior_personnel"] +
        categories["B_other_personnel"] +
        categories["C_fringe"] +
        categories["D_equipment"] +
        categories["E_travel"] +
        categories["F_participant_support"] +
        categories["G_other_direct"]
    )

    # If I_indirect is specified via rate, compute from base (MTDC) else take amount
    indirect_spec = spec.get("I_indirect", []) or []
    indirect_total = 0.0
    if indirect_spec and isinstance(indirect_spec[0], dict) and "rate" in indirect_spec[0]:
        rate = float(indirect_spec[0].get("rate", 0))
        # MTDC typically excludes: equipment >$5k, participant support, subaward beyond first $25k each.
        # Here, approximate MTDC as direct_total - equipment - participant support.
        mtdc = direct_total - categories["D_equipment"] - categories["F_participant_support"]
        indirect_total = mtdc * rate
        categories["I_indirect"] = indirect_total
        details["I_indirect"] = [{"rate": rate, "base_mtdc": round(mtdc, 2), "amount": round(indirect_total, 2)}]
    else:
        indirect_total = categories["I_indirect"]

    total = direct_total + indirect_total

    # Markdown output
    lines = []
    lines.append("# Budget (Auto-generated)\n")
    lines.append(f"- Cap: {usd(BUDGET_CAP)} | Total: {usd(total)} | Headroom: {usd(BUDGET_CAP - total)}\n")
    if total > BUDGET_CAP:
        lines.append("\n> ⚠️ Total exceeds cap. Reduce line items.\n")

    def emit_table(title: str, key: str, cols: List[Tuple[str, str]]):
        lines.append(f"\n## {title}\n")
        items = details.get(key, [])
        if not items:
            lines.append("(none)\n")
            return
        # Header
        header = "| " + " | ".join(h for h, _ in cols) + " |"
        sep = "| " + " | ".join(["---"] * len(cols)) + " |"
        lines.append(header)
        lines.append(sep)
        for it in items:
            row = []
            for _, field in cols:
                val = it.get(field)
                if isinstance(val, (int, float)):
                    row.append(usd(val))
                else:
                    row.append(str(val) if val is not None else "")
            lines.append("| " + " | ".join(row) + " |")
        lines.append(f"\nSubtotal: {usd(categories[key])}\n")

    emit_table("A. Senior Personnel", "A_senior_personnel", [("Description", "description"), ("Amount", "amount")])
    emit_table("B. Other Personnel", "B_other_personnel", [("Description", "description"), ("Amount", "amount")])
    emit_table("C. Fringe Benefits", "C_fringe", [("Description", "description"), ("Amount", "amount")])
    emit_table("D. Equipment", "D_equipment", [("Item", "description"), ("Amount", "amount")])

    # Travel table with breakdown
    lines.append("\n## E. Travel\n")
    if travel_breakdowns:
        header = "| Description | Travelers | Days | City | State | Airfare (pp) | Lodging/night | M&IE/day | Total |"
        sep = "| --- | --- | --- | --- | --- | --- | --- | --- | --- |"
        lines.append(header)
        lines.append(sep)
        for it in travel_breakdowns:
            lines.append("| {desc} | {trav} | {days} | {city} | {st} | {air} | {lod} | {mie} | {tot} |".format(
                desc=it.get("description",""),
                trav=it.get("travelers"),
                days=it.get("days"),
                city=safe_get(it, "destination", "city", default=""),
                st=safe_get(it, "destination", "state", default=""),
                air=usd(it.get("airfare",0)),
                lod=usd(it.get("lodging_rate",0)),
                mie=usd(it.get("mie_rate",0)),
                tot=usd(it.get("total",0)),
            ))
        lines.append(f"\nSubtotal: {usd(categories['E_travel'])}\n")
    else:
        lines.append("(none)\n")

    emit_table("F. Participant Support", "F_participant_support", [("Description", "description"), ("Amount", "amount")])
    emit_table("G. Other Direct Costs", "G_other_direct", [("Description", "description"), ("Amount", "amount")])

    # Indirect
    lines.append("\n## I. Indirect (F&A)\n")
    if details["I_indirect"]:
        d0 = details["I_indirect"][0]
        if "rate" in d0:
            lines.append(f"Rate: {d0['rate']*100:.1f}% on MTDC {usd(d0['base_mtdc'])} = {usd(d0['amount'])}\n")
        else:
            emit_table("I. Indirect (F&A)", "I_indirect", [("Description", "description"), ("Amount", "amount")])
    else:
        lines.append("(none)\n")

    lines.append("\n---\n")
    lines.append(f"Total Direct: {usd(direct_total)}\n")
    lines.append(f"Total Indirect: {usd(indirect_total)}\n")
    lines.append(f"Grand Total: {usd(total)} (Cap headroom: {usd(BUDGET_CAP - total)})\n")

    OUT_MD.parent.mkdir(parents=True, exist_ok=True)
    OUT_MD.write_text("\n".join(lines))

    # JSON for site
    SITE_JSON.parent.mkdir(parents=True, exist_ok=True)
    json.dump({
        "cap": BUDGET_CAP,
        "categories": categories,
        "details": details,
        "direct_total": direct_total,
        "indirect_total": indirect_total,
        "total": total,
        "headroom": BUDGET_CAP - total,
    }, SITE_JSON.open("w"))
    print(f"✅ Budget built. Total: {usd(total)} ({usd(BUDGET_CAP - total)} headroom)")


if __name__ == "__main__":
    main()

