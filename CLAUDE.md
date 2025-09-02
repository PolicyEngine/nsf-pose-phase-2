# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository organizes PolicyEngine's NSF POSE (Pathways to Enable Open-Source Ecosystems) Phase 2 application. It consolidates Phase 1 materials and provides a structured system for building and reviewing the Phase 2 application with automated assembly, word counting, and validation.

## Repository Structure

- `materials/phase1/`: Source documents from 2024 POSE Phase 1 (letters, narrative, budget, due diligence)
- `materials/phase2/`: Solicitation documents, competitive analysis, and UX research
- `docs/pose/`: Markdown responses and configuration for Phase 2 application
  - `responses/`: Individual section responses (project_summary.md, context_of_ose.md, etc.)
  - `budget/`: Budget YAML spec and generated markdown
  - `research/`: Market landscape, validation plans, award analysis
  - `letters/`: Support letter templates and drafts
- `scripts/`: Python scripts for application assembly and content management
- `site/`: React + Vite review site for visualizing application progress

## Key Commands

### Site Development
```bash
# From site/ directory
npm install                  # Install dependencies
npm run sync:content         # Sync content from docs to site (runs Python scripts)
npm run dev                  # Start development server
npm run build               # Build for production
```

### Application Assembly
```bash
# From root directory
python3 scripts/assemble_pose_application.py  # Assemble all sections into docs/pose/assembled.md
python3 scripts/build_budget.py               # Build budget from YAML spec
python3 scripts/export_docx.py                # Export assembled markdown to DOCX
python3 scripts/sync_site_content.py          # Sync all content to site/public/content/
```

### Budget Building
```bash
# Set GSA API key for automatic per diem rates (optional)
export GSA_API_KEY=your_key_here
python3 scripts/build_budget.py
```

## Application Configuration

The application structure is defined in `docs/pose/pose_questions.yaml`:
- Lists all required sections with file paths
- Tracks page limits (15 pages max for Project Description)
- Lists required attachments and their status

Each section response should be written in markdown in `docs/pose/responses/`:
- `project_summary.md`
- `context_of_ose.md`
- `ecosystem_establishment.md`
- `organization_governance.md`
- `continuous_development.md`
- `risk_security.md`
- `community_building.md`
- `sustainability.md`
- `evaluation_plan.md`
- `broader_impacts.md`
- `conclusion.md`

## Budget System

Budget is specified in `docs/pose/budget/budget.yaml` following NSF categories:
- A: Senior Personnel
- B: Other Personnel  
- C: Fringe Benefits
- D: Equipment
- E: Travel (with GSA per diem auto-calculation)
- F: Participant Support
- G: Other Direct Costs
- I: Indirect (F&A)

Budget cap: $1,500,000 over 24 months

The `build_budget.py` script:
- Computes travel costs using GSA per diem rates when available
- Generates human-readable markdown (budget.md)
- Creates machine-readable JSON for the site
- Calculates indirect costs on MTDC base
- Shows budget headroom vs. cap

## Content Assembly Flow

1. Write section responses in `docs/pose/responses/`
2. Run `python3 scripts/assemble_pose_application.py` to combine sections
3. Run `python3 scripts/build_budget.py` to generate budget
4. Run `python3 scripts/export_docx.py` to create Word document for page counting
5. Run `python3 scripts/sync_site_content.py` to update site content
6. View progress at `npm run dev` in site/ directory

## Site Architecture

The site is a React + TypeScript application using Vite:
- Single-page app with tab navigation
- Markdown rendering for all content sections
- Budget visualization from JSON data
- Mermaid diagram support for architecture diagrams
- Competitive landscape table from Excel data

Key views:
- Application: Assembled markdown with section navigation
- Checklist: Track completion status
- Budget: Interactive budget breakdown
- Diagrams: Architecture and workflow visualizations
- Awards: Phase 1 award analysis
- Validation: Testing and validation plans
- Research: Market landscape and research findings

## Important Notes

- **Deadline**: September 2, 2025 (as configured in pose_questions.yaml)
- **Page Limit**: 15 pages total for Project Description
- **Word Counting**: The assembly script tracks word counts but doesn't enforce limits
- **GSA Per Diem**: Set GSA_API_KEY environment variable for automatic travel rate lookups
- **Content Sync**: Always run `sync_site_content.py` before viewing site to ensure latest content
- **DOCX Export**: Use `export_docx.py` to generate Word document for accurate page counting

## Development Tips

- Edit markdown responses directly in `docs/pose/responses/`
- Update budget in YAML format, let script generate markdown/JSON
- Use the site for quick review and navigation between sections
- Check assembled.md for the complete application view
- Monitor budget headroom to stay under $1.5M cap
- Keep references.md updated with all citations