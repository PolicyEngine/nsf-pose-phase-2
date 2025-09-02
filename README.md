NSF POSE Phase 2 — PolicyEngine

This repo organizes our NSF POSE application work. It starts by consolidating Phase 1/2024 materials and sets up a structure to build a site and application flow (including word counts) modeled after the `atlas` repo.

Contents
- `materials/phase1/`: Source docs from 2024 POSE Phase 1 (letters, narrative, budget, due diligence, etc.).
- `materials/phase2/`: Solicitation and program references for POSE Phase 2 (downloaded/linked).
- `docs/pose/`: Placeholder for markdown responses and config we’ll author for Phase 2.
- `scripts/`: Placeholder for assembly/validation scripts (word counts, completeness checks, etc.).
- `site/`: Vite + React review site (Application, Checklist, Diagrams, Competitive)

Next Steps
- Convert relevant narrative pieces to markdown in `docs/pose/responses/` for structured editing.
- Define a questions/config YAML for POSE (similar to `atlas/docs/pbif/pbif_questions.yaml`).
- Port/adapt the assembly script to generate a single application view with per‑section word counts and status.
- Optionally scaffold a small Vite site (like `../atlas`) to render progress, counts, and provide copy‑buttons for answers.
- Track attachment status (letters, DMP, budget) alongside narrative sections.

Site usage
- From `site/`: `npm install && npm run sync:content && npm run dev`

Reference
- See `../atlas` for examples of: assembling content from markdown, enforcing word counts, and generating site content.
