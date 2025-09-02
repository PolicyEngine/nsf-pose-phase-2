import React, { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

const oseArchitecture = `%%{init: { 'theme': 'default' }}%%
flowchart LR
  subgraph Ecosystem
    L0[L0 sparsity\n(PyTorch)]
    MI[MicroImpute\n(QRF Imputation)]
    MC[MicroCalibrate\n(Reweighting, L0)]
  end
  Data[Survey/Admin Data] --> MI --> MC
  Rules[Policy rules engine] --> MC
  MC --> Outputs[Calibrated data & metrics]
  Contributors -->|PRs, Issues| Ecosystem
  Steering[Governance] --> Ecosystem
`

const calibrationPipeline = `%%{init: { 'theme': 'default' }}%%
sequenceDiagram
  participant D as Data (CPS/PUF/...)
  participant MI as MicroImpute
  participant MC as MicroCalibrate
  participant T as Targets (Admin)
  participant M as Metrics/Dashboard
  D->>MI: Train/apply QRF
  MI->>MC: Extended dataset
  T-->>MC: Administrative targets
  MC->>MC: Dense GD + optional L0 sparsity
  MC->>M: Loss, pct-close, excluded targets
  MC->>D: Calibrated weights (state/CD)
`

export const Diagrams: React.FC = () => {
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)
  const ref3 = useRef<HTMLDivElement>(null)
  useEffect(() => {
    mermaid.initialize({ startOnLoad: false })
    const render = async () => {
      if (ref1.current) {
        const { svg } = await mermaid.render('ose', oseArchitecture)
        ref1.current.innerHTML = svg
      }
      if (ref2.current) {
        const { svg } = await mermaid.render('calib', calibrationPipeline)
        ref2.current.innerHTML = svg
      }
      // Render Future-State Tech Stack (from ../strategy) if available
      try {
        const resp = await fetch('/content/techStack.json')
        if (resp.ok) {
          const data = await resp.json()
          const nodes: string[] = Object.keys(data.nodes || {})
          const edges: Array<{source:string,target:string}> = (data.edges?.future) || []
          const header = "flowchart LR\n"
          const nodeLines = nodes.map(n => `${n}([${n}])`).join('\n')
          const edgeLines = edges.map(e => `${e.source} --> ${e.target}`).join('\n')
          const graph = `%%{init: { 'theme': 'default' }}%%\n${header}${nodeLines}\n${edgeLines}`
          if (ref3.current) {
            const { svg } = await mermaid.render('future', graph)
            ref3.current.innerHTML = svg
          }
        }
      } catch {}
    }
    render()
  }, [])
  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section>
        <h2>OSE Architecture</h2>
        <div ref={ref1} />
      </section>
      <section>
        <h2>Calibration Pipeline</h2>
        <div ref={ref2} />
      </section>
      <section>
        <h2>Future-State Tech Stack (from Strategy)</h2>
        <div ref={ref3} />
      </section>
      <section>
        <h2>US Dataset Methodology</h2>
        <p>See the methodology diagram embedded in policyengine-us-data; we can mirror it here if needed.</p>
      </section>
    </div>
  )
}
