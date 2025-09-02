#!/usr/bin/env python3
"""
Sync site/public content from docs and materials.
- Copies assembled.md and checklist.md to site/public/content/
- Copies competitive landscape .xlsx and (if possible) converts to CSV
"""
from pathlib import Path
import shutil
import os

ROOT = Path(__file__).resolve().parents[1]

def ensure_dir(p: Path):
    p.mkdir(parents=True, exist_ok=True)

def copy_file(src: Path, dst: Path):
    if src.exists():
        dst.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, dst)
        print(f"Copied {src} -> {dst}")
    else:
        print(f"Missing {src}")

def try_convert_xlsx_to_csv(xlsx: Path, csv: Path):
    try:
        import pandas as pd  # type: ignore
        df = pd.read_excel(xlsx)
        csv.parent.mkdir(parents=True, exist_ok=True)
        df.to_csv(csv, index=False)
        print(f"Converted {xlsx} -> {csv}")
    except Exception as e:
        print(f"Could not convert {xlsx} to CSV: {e}")

def main():
    # Build budget first so outputs are available for sync
    try:
        os.system(f"python3 {ROOT / 'scripts' / 'build_budget.py'}")
        os.system(f"python3 {ROOT / 'scripts' / 'export_docx.py'}")
    except Exception as e:
        print(f"Budget/docx build failed: {e}")
    assembled = ROOT / 'docs' / 'pose' / 'assembled.md'
    checklist = ROOT / 'docs' / 'pose' / 'checklist.md'
    references = ROOT / 'docs' / 'pose' / 'references.md'
    site_overview = ROOT / 'docs' / 'pose' / 'site_overview.md'
    pose_yaml = ROOT / 'docs' / 'pose' / 'pose_questions.yaml'
    research = ROOT / 'docs' / 'pose' / 'research' / 'market_landscape.md'
    awards = ROOT / 'docs' / 'pose' / 'research' / 'pose_phase1_awards.md'
    awards_list = ROOT / 'docs' / 'pose' / 'research' / 'pose_phase1_awards_list.md'
    awards_summary = ROOT / 'docs' / 'pose' / 'research' / 'pose_phase1_summary.md'
    validation_plan = ROOT / 'docs' / 'pose' / 'research' / 'validation_plan.md'
    validation_catalog = ROOT / 'docs' / 'pose' / 'research' / 'validation_catalog.md'
    cc_ux = ROOT / 'docs' / 'pose' / 'research' / 'citizen_codex_ux_summary.md'
    validation_scenarios = ROOT / 'docs' / 'pose' / 'research' / 'validation_scenarios.md'
    competitive = ROOT / 'materials' / 'phase2' / 'competitive' / 'PolicyEngine competitive landscape.xlsx'

    out_dir = ROOT / 'site' / 'public' / 'content'
    ensure_dir(out_dir)

    copy_file(assembled, out_dir / 'assembled.md')
    copy_file(checklist, out_dir / 'checklist.md')
    copy_file(references, out_dir / 'references.md')
    copy_file(site_overview, out_dir / 'site_overview.md')
    copy_file(pose_yaml, out_dir / 'pose_questions.yaml')
    copy_file(research, out_dir / 'research.md')
    copy_file(awards, out_dir / 'awards.md')
    if awards_list.exists():
        copy_file(awards_list, out_dir / 'awards_list.md')
    if awards_summary.exists():
        copy_file(awards_summary, out_dir / 'awards_summary.md')
    if validation_plan.exists():
        copy_file(validation_plan, out_dir / 'validation_plan.md')
    if validation_catalog.exists():
        copy_file(validation_catalog, out_dir / 'validation_catalog.md')
    if cc_ux.exists():
        copy_file(cc_ux, out_dir / 'citizen_codex_ux.md')
    if validation_scenarios.exists():
        copy_file(validation_scenarios, out_dir / 'validation_scenarios.md')
    # Budget artifacts
    copy_file(ROOT / 'docs' / 'pose' / 'budget' / 'budget.md', out_dir / 'budget.md')
    budget_json_src = ROOT / 'site' / 'public' / 'content' / 'budget.json'
    if budget_json_src.exists() and budget_json_src != out_dir / 'budget.json':
        copy_file(budget_json_src, out_dir / 'budget.json')
    # Application DOCX for page review
    copy_file(ROOT / 'docs' / 'pose' / 'assembled.docx', out_dir / 'assembled.docx')
    copy_file(competitive, out_dir / 'PolicyEngine competitive landscape.xlsx')
    # Try CSV for in-browser table
    try_convert_xlsx_to_csv(competitive, out_dir / 'competitive.csv')

    # Try to include future-state architecture data from ../strategy
    strategy_techstack = (ROOT / '..' / 'strategy' / 'src' / 'data' / 'techStack.json').resolve()
    copy_file(strategy_techstack, out_dir / 'techStack.json')

    # Copy PolicyEngine logo from policyengine-app for site header
    logo_src_svg = (ROOT / '..' / 'policyengine-app' / 'src' / 'images' / 'logos' / 'policyengine' / 'blue.svg').resolve()
    assets_dir = ROOT / 'site' / 'public' / 'assets'
    ensure_dir(assets_dir)
    copy_file(logo_src_svg, assets_dir / 'policyengine-logo.svg')
    
    # Copy draft letters for internal review
    drafts_src = ROOT / 'docs' / 'pose' / 'letters' / 'drafts'
    drafts_dst = ROOT / 'site' / 'public' / 'docs' / 'pose' / 'letters' / 'drafts'
    if drafts_src.exists():
        ensure_dir(drafts_dst)
        for draft_file in drafts_src.glob('*.md'):
            copy_file(draft_file, drafts_dst / draft_file.name)

if __name__ == '__main__':
    main()
