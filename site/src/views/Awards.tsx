import React from 'react'
import { MarkdownView } from '../components/MarkdownView'

export const Awards: React.FC = () => {
  // Prefer parsed list when available; fall back to research notes
  return <div className="container" style={{ display: 'grid', gap: 16 }}>
    <div className="card"><h2 style={{ margin: 0 }}>POSE Phase I Awardees — Summary</h2></div>
    <MarkdownView src="/content/awards_summary.md" />
    <div className="card"><h2 style={{ margin: 0 }}>Detailed List</h2></div>
    <MarkdownView src="/content/awards_list.md" />
    <div className="card"><h3 style={{ margin: 0 }}>Notes & Sources</h3></div>
    <MarkdownView src="/content/awards.md" />
  </div>
}
