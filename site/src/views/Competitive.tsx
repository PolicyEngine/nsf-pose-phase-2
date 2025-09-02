import React, { useEffect, useState } from 'react'

type Row = Record<string, string>

export const Competitive: React.FC = () => {
  const [rows, setRows] = useState<Row[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/content/competitive.csv')
      .then(r => {
        if (!r.ok) throw new Error('No CSV found; using .xlsx link below.')
        return r.text()
      })
      .then(text => {
        const [headerLine, ...lines] = text.trim().split(/\r?\n/)
        const headers = headerLine.split(',').map(h => h.trim())
        const data = lines.map(line => {
          const cols = line.split(',')
          const row: Row = {}
          headers.forEach((h, i) => (row[h] = (cols[i] || '').trim()))
          return row
        })
        setRows(data)
      })
      .catch(e => setError(e.message))
  }, [])

  return (
    <div>
      <h2>Competitive Landscape</h2>
      {rows ? (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', minWidth: 600 }}>
            <thead>
              <tr>{Object.keys(rows[0] || {}).map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', borderBottom: '1px solid #ddd' }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const bg = i % 2 === 0 ? '#fafafa' : '#fff'
                return (
                  <tr key={i} style={{ background: bg }}>
                    {Object.keys(rows[0] || {}).map(h => (
                      <td key={h} style={{ padding: '6px 12px', borderBottom: '1px solid #f0f0f0' }}>{r[h]}</td>
                    ))}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>{error || 'Loading…'}</p>
      )}
      <p>
        Source: <a href="/content/PolicyEngine competitive landscape.xlsx">download original .xlsx</a>
      </p>
    </div>
  )
}
