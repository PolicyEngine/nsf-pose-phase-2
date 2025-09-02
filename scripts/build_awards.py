#!/usr/bin/env python3
"""
Build POSE Phase I awards list from an exported CSV and write:
- docs/pose/research/pose_phase1_awards_list.md

Usage: place the Advanced Award Search export as
materials/phase2/pose_phase_awards.csv (CSV). If you only have an XLS,
please re-export as CSV — parsing legacy .xls requires extra libs.
"""
from __future__ import annotations

import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CSV_PATH = ROOT / 'materials' / 'phase2' / 'pose_phase_awards.csv'
MD_OUT = ROOT / 'docs' / 'pose' / 'research' / 'pose_phase1_awards_list.md'


def main() -> None:
    if not CSV_PATH.exists():
        print(f"No CSV found at {CSV_PATH}. Please export from Advanced Award Search as CSV.")
        print("Tip: https://www.nsf.gov/awardsearch/advancedSearchResult?ProgEleCode=211Y00&BooleanElement=Any&BooleanRef=Any#results")
        return

    rows = list(csv.DictReader(CSV_PATH.open()))
    # Common award search CSV headers include: Award Number, Organization, Title, Start Date, Expiration Date, Estimated Total Award Amount, etc.
    # Filter to Phase I by title if present, else include all and tag phase heuristically.
    def phase_from_title(t: str) -> str:
        t = (t or '').lower()
        if 'phase i' in t or 'phase 1' in t:
            return 'Phase I'
        if 'phase ii' in t or 'phase 2' in t:
            return 'Phase II'
        return 'Unspecified'

    items = []
    for r in rows:
        title = r.get('Title') or r.get('title') or ''
        org = r.get('Organization') or r.get('Awardee Organization') or r.get('awardeeName') or ''
        amount = r.get('Estimated Total Award Amount') or r.get('Awarded Amount to Date') or r.get('fundsObligatedAmt') or ''
        start = r.get('Start Date') or r.get('startDate') or ''
        award_num = r.get('Award Number') or r.get('id') or ''
        phase = phase_from_title(title)
        items.append({
            'award_num': award_num,
            'org': org,
            'title': title,
            'amount': amount,
            'start': start,
            'phase': phase,
        })

    # Prefer Phase I entries for the list
    phase1 = [i for i in items if i['phase'] == 'Phase I'] or items

    lines = []
    lines.append('# POSE Awards — Phase I list (from NSF export)\n')
    lines.append('Source: Advanced Award Search export filtered by program element 211Y00.\n')
    for i in phase1:
        amt = i['amount']
        if amt and amt.isdigit():
            amt = f"${int(amt):,}"
        lines.append(f"- {i['org']} — {i['title']} ({i['phase']}) — {amt or 'n/a'} — Start: {i['start'] or 'n/a'} — Award: {i['award_num']}")

    MD_OUT.parent.mkdir(parents=True, exist_ok=True)
    MD_OUT.write_text('\n'.join(lines))
    print(f"✅ Wrote {MD_OUT}")


if __name__ == '__main__':
    main()

