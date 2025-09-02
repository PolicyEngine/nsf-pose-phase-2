import React, { useEffect, useState } from 'react'
import { MarkdownView } from '../components/MarkdownView'

export const Budget: React.FC = () => {
  const [meta, setMeta] = useState<any | null>(null)
  const base = import.meta.env.BASE_URL || '/'
  useEffect(() => {
    fetch(base + 'content/budget.json').then(r => r.ok ? r.json() : null).then(setMeta).catch(() => {})
  }, [base])
  return (
    <div className="container" style={{ display: 'grid', gap: 16 }}>
      {meta && (
        <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <strong>Total:</strong> ${meta.total.toLocaleString()} &nbsp;•&nbsp; <strong>Cap:</strong> ${meta.cap.toLocaleString()} &nbsp;•&nbsp; <strong>Headroom:</strong> ${meta.headroom.toLocaleString()}
          </div>
          {meta.total > meta.cap && <span style={{ color: '#b50d0d' }}>Over cap — reduce line items</span>}
        </div>
      )}
      <MarkdownView src="/content/budget.md" />
    </div>
  )
}
