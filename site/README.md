POSE Phase II Review Site

Local preview
- From `site/`, install deps: `npm install`
- Sync content: `npm run sync:content`
- Run: `npm run dev`

Pages
- Application: renders `docs/pose/assembled.md`
- Checklist: renders `docs/pose/checklist.md`
- Diagrams: renders Mermaid diagrams (OSE architecture and calibration pipeline)
- Competitive: simple table if `site/public/content/competitive.csv` exists; link to `.xlsx` otherwise

Notes
- To enable the Competitive page table, install `pandas` + `openpyxl` and run `npm run sync:content` again, or export the spreadsheet to CSV at `site/public/content/competitive.csv`.

