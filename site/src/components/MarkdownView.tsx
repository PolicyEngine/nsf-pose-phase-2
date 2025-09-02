import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

export const MarkdownView: React.FC<{ src: string }> = ({ src }) => {
  const [md, setMd] = useState<string>('Loading…')
  useEffect(() => {
    let cancelled = false
    fetch(src).then(r => r.text()).then(t => { if (!cancelled) setMd(t) })
    return () => { cancelled = true }
  }, [src])
  return <div className="card markdown-content"><ReactMarkdown>{md}</ReactMarkdown></div>
}
