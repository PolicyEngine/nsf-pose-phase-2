import React, { useEffect, useState } from 'react'
import { MarkdownView } from '../components/MarkdownView'

export const Application: React.FC = () => {
  const [words, setWords] = useState<number | null>(null)
  useEffect(() => {
    fetch('/content/assembled.md').then(r => r.text()).then(t => {
      const w = t.split(/\s+/).filter(Boolean).length
      setWords(w)
    }).catch(() => {})
  }, [])
  const pages = words ? (words / 550) : null // rough estimate at 11pt
  return (
    <div className="container" style={{ display: 'grid', gap: 16 }}>
      <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <strong>Estimated pages:</strong> {pages ? pages.toFixed(1) : '…'} / 15
        </div>
        <div>
          <a href="/content/assembled.docx" download>Download DOCX</a>
        </div>
      </div>
      <MarkdownView src="/content/assembled.md" />
    </div>
  )
}
