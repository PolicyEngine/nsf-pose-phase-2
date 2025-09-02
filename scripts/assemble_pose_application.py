#!/usr/bin/env python3
"""
Assemble POSE application from individual markdown responses.
Tracks word counts and basic completeness based on a YAML config.

NOTE: This is a minimal scaffold adapted from the atlas patterns.
Fill in `docs/pose/pose_questions.yaml` and add responses in `docs/pose/responses/`.
"""

from pathlib import Path
import re
import sys
import yaml

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs" / "pose"

def count_words(text: str) -> int:
    clean = re.sub(r"\[([^\]]+)\]\([^\)]+\)", r"\1", text)
    clean = re.sub(r"[*_`#]", "", clean)
    clean = re.sub(r"\s+", " ", clean).strip()
    return len(clean.split()) if clean else 0

def load_text(p: Path) -> str:
    return p.read_text(encoding="utf-8").strip() if p.exists() else ""

def main():
    cfg_path = DOCS / "pose_questions.yaml"
    if not cfg_path.exists():
        print(f"Config not found: {cfg_path}")
        sys.exit(1)

    cfg = yaml.safe_load(cfg_path.read_text(encoding="utf-8"))
    sections = cfg.get("sections", [])

    out_lines = []
    out_lines.append("# POSE Application (Assembled)\n")

    total = len(sections)
    complete = 0
    needs = []

    for s in sections:
        title = s.get("title", "Untitled")
        limit = s.get("word_limit")
        page_limit = s.get("page_limit")
        rel = Path(s.get("file", ""))
        resp_path = DOCS / rel
        content = load_text(resp_path)
        words = count_words(content)

        out_lines.append(f"## {title}")
        if content:
            out_lines.append(content)
            # No per-section word-count footer; we only track overall length now
            if isinstance(limit, int) and 0 < words <= limit:
                complete += 1
            else:
                needs.append({"title": title, "current": words, "target": (limit or 0)})
        else:
            out_lines.append("❌ MISSING\n")
            needs.append({"title": title, "current": 0, "target": (limit or 0)})

        out_lines.append("---\n")

    out_lines.append("# Summary")
    out_lines.append(f"- Sections complete: {complete}/{total}")
    if needs:
        out_lines.append("\n## Sections needing attention")
        for n in needs:
            if n["current"] == 0:
                if n["target"] and n["target"] > 0:
                    out_lines.append(f"- {n['title']}: missing (≤{n['target']} words)")
                else:
                    out_lines.append(f"- {n['title']}: missing")
            elif n["target"] and n["current"] > n["target"]:
                out_lines.append(f"- {n['title']}: reduce by {n['current']-n['target']} words")

    # Append References Cited if available
    refs = ROOT / 'docs' / 'pose' / 'references.md'
    if refs.exists():
        out_lines.append("\n## References Cited\n")
        out_lines.append(refs.read_text(encoding='utf-8').strip())

    out_path = DOCS / "assembled.md"
    out_path.write_text("\n".join(out_lines), encoding="utf-8")
    print(f"✅ Wrote {out_path}")
    print(f"📊 Completion: {complete}/{total} sections")

if __name__ == "__main__":
    main()
