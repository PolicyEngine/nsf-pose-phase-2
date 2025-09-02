import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const MarkdownView: React.FC<{ src: string }> = ({ src }) => {
  const [md, setMd] = useState<string>('Loading…')
  const base = import.meta.env.BASE_URL || '/'
  const resolved = src.startsWith('http')
    ? src
    : (base + (src.startsWith('/') ? src.slice(1) : src))
  useEffect(() => {
    let cancelled = false
    fetch(resolved).then(r => r.text()).then(t => { if (!cancelled) setMd(t) })
    return () => { cancelled = true }
  }, [resolved])
  return <div className="card markdown-content"><ReactMarkdown>{md}</ReactMarkdown></div>
}
