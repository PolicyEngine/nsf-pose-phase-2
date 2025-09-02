import React from 'react'
import { MarkdownView } from '../components/MarkdownView'

export const Validation: React.FC = () => {
  return (
    <div className="container" style={{ display: 'grid', gap: 16 }}>
      <div className="card"><h2 style={{ margin: 0 }}>Validation & Interoperability Plan</h2></div>
      <MarkdownView src="/content/validation_plan.md" />
      <div className="card"><h2 style={{ margin: 0 }}>Validation Catalog</h2></div>
      <MarkdownView src="/content/validation_catalog.md" />
      <div className="card"><h2 style={{ margin: 0 }}>Validation Scenarios</h2></div>
      <MarkdownView src="/content/validation_scenarios.md" />
    </div>
  )
}
