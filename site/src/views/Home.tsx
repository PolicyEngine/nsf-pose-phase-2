import React, { useEffect, useState } from 'react'
import { MarkdownView } from '../components/MarkdownView'

export const Home: React.FC = () => {
  const [deadline, setDeadline] = useState<string | null>(null)
  useEffect(() => {
    fetch('/content/pose_questions.yaml')
      .then(r => (r.ok ? r.text() : ''))
      .then(text => {
        if (!text) return
        const m = text.match(/\bdeadline\s*:\s*['\"]?([0-9]{4}-[0-9]{2}-[0-9]{2})['\"]?/)
        if (m && m[1]) setDeadline(m[1])
      })
      .catch(() => {})
  }, [])
  return (
    <div className="container" style={{ display: 'grid', gap: 16 }}>
      <div className="headline">
        <h1 style={{ margin: 0, fontSize: 22 }}>PolicyEngine — NSF POSE Phase II</h1>
        {deadline && <span className="badge">Deadline: {deadline}</span>}
      </div>
      <p style={{ maxWidth: 900 }}>
        Establishing a sustainable, robust open‑source ecosystem for transparent, reproducible tax‑and‑benefit microsimulation — with secure supply chain practices, formal governance, and growing contributor pathways.
      </p>
      <MarkdownView src="/content/site_overview.md" />
    </div>
  )
}
