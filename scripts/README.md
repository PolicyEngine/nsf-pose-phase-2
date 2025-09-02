Scripts

This folder will contain utilities to assemble and validate the POSE application content.

Planned scripts (inspired by `../atlas`):
- `assemble_pose_application.py`: Combine markdown responses into a single output with word‑count indicators and status.
- `build_application_content.py`: Optional generator for a site to render sections (TypeScript content output), if we scaffold a Vite app.

The initial assembler will expect:
- `docs/pose/pose_questions.yaml` – question metadata (id, title, word_limit, and `file` path under `docs/pose/responses/`).
- Markdown response files under `docs/pose/responses/`.
- Output at `docs/pose/assembled.md` (or a site content path if we add a frontend).

