import React, { useState } from 'react'

interface LetterCandidate {
  name: string
  organization: string
  category: string
  scores: {
    currentUse: number // 0-5: How actively they use PolicyEngine
    futureContribution: number // 0-5: Commitment to future OSE contribution
    credibility: number // 0-5: Weight of endorsement
    uniqueValue: number // 0-5: Unique perspective/value they bring
    governmentPath: number // 0-5: Connection to government adoption
    sustainability: number // 0-5: Financial or strategic sustainability
  }
  notes: string
  strengths: string[]
  concerns: string[]
}

const letterCandidates: LetterCandidate[] = [
  {
    name: "James Poterba",
    organization: "NBER (President)",
    category: "Research Institution",
    scores: {
      currentUse: 4,
      futureContribution: 5,
      credibility: 5,
      uniqueValue: 5,
      governmentPath: 3,
      sustainability: 4
    },
    notes: "MOU partnership, automated TAXSIM comparison tool built, heavyweight endorsement",
    strengths: [
      "NBER President - massive credibility",
      "Active MOU partnership",
      "Built comparison tool showing collaboration",
      "Infrastructure commitment"
    ],
    concerns: ["Already used in PBIF (but relationship deepened)"]
  },
  {
    name: "John Sabelhaus",
    organization: "Economist (former CBO)",
    category: "Government/Research",
    scores: {
      currentUse: 5,
      futureContribution: 5,
      credibility: 5,
      uniqueValue: 5,
      governmentPath: 5,
      sustainability: 3
    },
    notes: "Prime user, coordinating govt/Brookings users, exploring Social Security reform applications",
    strengths: [
      "Built CBOLT at CBO - deep expertise",
      "Can articulate closed vs open source transformation",
      "Government connections (CBO, Brookings)",
      "Working on Social Security reform - major impact area",
      "Committed to open source for public trust"
    ],
    concerns: ["Already used in PBIF (but now prime user)"]
  },
  {
    name: "George Callas",
    organization: "Arnold Ventures (EVP Public Finance)",
    category: "Funder/User",
    scores: {
      currentUse: 5,
      futureContribution: 5,
      credibility: 4,
      uniqueValue: 5,
      governmentPath: 4,
      sustainability: 5
    },
    notes: "Funded 3 projects, active use for congressional meetings on 2025 reconciliation",
    strengths: [
      "Major funder - sustainability evidence",
      "Active user for policy work",
      "Congressional impact (AMT/SALT analysis)",
      "Shows both financial AND usage commitment"
    ],
    concerns: ["None"]
  },
  {
    name: "Matthew Unrath",
    organization: "USC (Assistant Professor)",
    category: "Academic/Government",
    scores: {
      currentUse: 4,
      futureContribution: 4,
      credibility: 3,
      uniqueValue: 4,
      governmentPath: 5,
      sustainability: 2
    },
    notes: "Former Census, NEWS project experience, HHS IRP funded project on tax rates/cliffs",
    strengths: [
      "Census connections (meeting with Rothbaum)",
      "Government advocacy potential",
      "Admin data project shows serious use",
      "HHS funding for current project"
    ],
    concerns: ["Less heavyweight than others"]
  },
  {
    name: "Martin Perron",
    organization: "Canadian Digital Service",
    category: "Government",
    scores: {
      currentUse: 3,
      futureContribution: 5,
      credibility: 4,
      uniqueValue: 5,
      governmentPath: 5,
      sustainability: 3
    },
    notes: "Rules as Code pioneer, working to integrate PolicyEngine into Canadian government",
    strengths: [
      "Rules as Code expertise perfectly aligned",
      "Government integration pathway",
      "International validation",
      "Cross-disciplinary translator role"
    ],
    concerns: ["May need government approval for letter"]
  },
  {
    name: "Mark Franks",
    organization: "Nuffield Foundation UK",
    category: "Funder",
    scores: {
      currentUse: 3,
      futureContribution: 4,
      credibility: 4,
      uniqueValue: 4,
      governmentPath: 4,
      sustainability: 5
    },
    notes: "Funded UK work, observed Cabinet Office impact",
    strengths: [
      "International funder",
      "UK government transparency evidence",
      "Shows global OSE potential"
    ],
    concerns: ["Less direct usage than others"]
  },
  {
    name: "Arun Advani",
    organization: "CenTax/Warwick",
    category: "Academic",
    scores: {
      currentUse: 3,
      futureContribution: 4,
      credibility: 3,
      uniqueValue: 3,
      governmentPath: 2,
      sustainability: 2
    },
    notes: "Collaborated on capital gains tax model",
    strengths: [
      "Academic collaboration",
      "External contributor",
      "Research credibility"
    ],
    concerns: ["Less distinctive than others"]
  },
  {
    name: "Eric Giannella",
    organization: "Better Government Lab (Georgetown)",
    category: "Research Institution",
    scores: {
      currentUse: 3,
      futureContribution: 3,
      credibility: 3,
      uniqueValue: 2,
      governmentPath: 3,
      sustainability: 2
    },
    notes: "Research use of PolicyEngine",
    strengths: [
      "Georgetown affiliation",
      "Better Government mission alignment"
    ],
    concerns: ["Less distinctive, boss might have better title"]
  },
  {
    name: "Cynthia Osborne",
    organization: "Prenatal-to-3 Policy Impact Center (Vanderbilt)",
    category: "Research Institution",
    scores: {
      currentUse: 3,
      futureContribution: 3,
      credibility: 3,
      uniqueValue: 3,
      governmentPath: 2,
      sustainability: 2
    },
    notes: "Domain-specific policy research",
    strengths: [
      "Academic credibility",
      "Benefits policy focus"
    ],
    concerns: ["Already have from PBIF, less active than others"]
  },
  {
    name: "Sekhar Paladugu",
    organization: "MyFriendBen (EIR/Interim CEO)",
    category: "Benefits Access Tool",
    scores: {
      currentUse: 4,
      futureContribution: 3,
      credibility: 2,
      uniqueValue: 3,
      governmentPath: 2,
      sustainability: 2
    },
    notes: "Downstream user of PolicyEngine API",
    strengths: [
      "Shows ecosystem development",
      "Active API user"
    ],
    concerns: ["Similar to other benefits tools, less weight"]
  }
]

export const LetterRubric: React.FC = () => {
  const [sortBy, setSortBy] = useState<keyof LetterCandidate['scores'] | 'total'>('total')
  
  const calculateTotal = (scores: LetterCandidate['scores']) => {
    return Object.values(scores).reduce((a, b) => a + b, 0)
  }
  
  const sortedCandidates = [...letterCandidates].sort((a, b) => {
    if (sortBy === 'total') {
      return calculateTotal(b.scores) - calculateTotal(a.scores)
    }
    return b.scores[sortBy] - a.scores[sortBy]
  })
  
  const getScoreColor = (score: number) => {
    if (score >= 4) return '#22c55e'
    if (score >= 3) return '#3b82f6'
    if (score >= 2) return '#f59e0b'
    return '#ef4444'
  }
  
  const topFive = sortedCandidates.slice(0, 5)
  
  return (
    <div className="letter-rubric">
      <h1>Letter of Support Selection Rubric</h1>
      
      <div className="requirements-box">
        <h2>NSF POSE Phase II Requirements</h2>
        <ul>
          <li>Minimum 3, maximum 5 letters of collaboration</li>
          <li>Must be from third-party users/contributors (not directly related to team)</li>
          <li>Must describe how they have contributed and will continue to contribute</li>
          <li>Maximum 2 pages each</li>
          <li>Must include: name, affiliation, relationship to team</li>
        </ul>
      </div>
      
      <div className="scoring-criteria">
        <h2>Evaluation Criteria</h2>
        <div className="criteria-grid">
          <div><strong>Current Use (0-5):</strong> How actively they use PolicyEngine</div>
          <div><strong>Future Contribution (0-5):</strong> Commitment to OSE development</div>
          <div><strong>Credibility (0-5):</strong> Weight of their endorsement</div>
          <div><strong>Unique Value (0-5):</strong> Distinctive perspective they bring</div>
          <div><strong>Government Path (0-5):</strong> Connection to government adoption</div>
          <div><strong>Sustainability (0-5):</strong> Financial or strategic sustainability</div>
        </div>
      </div>
      
      <div className="sort-controls">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)}>
          <option value="total">Total Score</option>
          <option value="currentUse">Current Use</option>
          <option value="futureContribution">Future Contribution</option>
          <option value="credibility">Credibility</option>
          <option value="uniqueValue">Unique Value</option>
          <option value="governmentPath">Government Path</option>
          <option value="sustainability">Sustainability</option>
        </select>
      </div>
      
      <div className="candidates-table">
        <h2>Letter Candidates Evaluation</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Organization</th>
              <th>Category</th>
              <th>Use</th>
              <th>Future</th>
              <th>Cred</th>
              <th>Unique</th>
              <th>Gov</th>
              <th>Sustain</th>
              <th>Total</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {sortedCandidates.map((candidate, idx) => {
              const total = calculateTotal(candidate.scores)
              const isTopFive = topFive.includes(candidate)
              return (
                <tr key={candidate.name} className={isTopFive ? 'top-five' : ''}>
                  <td>{idx + 1}</td>
                  <td><strong>{candidate.name}</strong></td>
                  <td>{candidate.organization}</td>
                  <td>{candidate.category}</td>
                  <td style={{color: getScoreColor(candidate.scores.currentUse)}}>{candidate.scores.currentUse}</td>
                  <td style={{color: getScoreColor(candidate.scores.futureContribution)}}>{candidate.scores.futureContribution}</td>
                  <td style={{color: getScoreColor(candidate.scores.credibility)}}>{candidate.scores.credibility}</td>
                  <td style={{color: getScoreColor(candidate.scores.uniqueValue)}}>{candidate.scores.uniqueValue}</td>
                  <td style={{color: getScoreColor(candidate.scores.governmentPath)}}>{candidate.scores.governmentPath}</td>
                  <td style={{color: getScoreColor(candidate.scores.sustainability)}}>{candidate.scores.sustainability}</td>
                  <td><strong>{total}/30</strong></td>
                  <td className="notes">{candidate.notes}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      
      <div className="recommendation">
        <h2>Recommended Top 5 Letters</h2>
        <ol>
          {topFive.map(candidate => (
            <li key={candidate.name}>
              <strong>{candidate.name}</strong> ({candidate.organization}) - Score: {calculateTotal(candidate.scores)}/30
              <ul className="strengths">
                {candidate.strengths.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
              {candidate.concerns.length > 0 && (
                <div className="concerns">
                  <em>Concerns: {candidate.concerns.join(', ')}</em>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      
      <div className="strategic-notes">
        <h2>Strategic Combination Notes</h2>
        <p>The top 5 combination provides:</p>
        <ul>
          <li><strong>Heavyweight endorsements:</strong> NBER President, former CBO economist</li>
          <li><strong>Open source transformation story:</strong> Sabelhaus's firsthand TAXSIM → PolicyEngine experience</li>
          <li><strong>Funding sustainability:</strong> Arnold Ventures, potential Nuffield</li>
          <li><strong>Government adoption paths:</strong> Census, CBO, Brookings, Canadian Digital Service</li>
          <li><strong>Policy impact evidence:</strong> Congressional meetings, Social Security reform, UK Cabinet Office</li>
          <li><strong>International reach:</strong> US, Canada, UK representation</li>
        </ul>
      </div>
      
      <style jsx>{`
        .letter-rubric {
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .requirements-box {
          background: #f0f9ff;
          border: 2px solid #0284c7;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        
        .scoring-criteria {
          background: #f8fafc;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
        
        .criteria-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }
        
        .sort-controls {
          margin: 20px 0;
          padding: 10px;
          background: #f1f5f9;
          border-radius: 4px;
        }
        
        .sort-controls select {
          margin-left: 10px;
          padding: 5px;
        }
        
        .candidates-table {
          margin: 20px 0;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        th, td {
          border: 1px solid #e2e8f0;
          padding: 8px;
          text-align: left;
        }
        
        th {
          background: #f1f5f9;
          font-weight: bold;
        }
        
        tr.top-five {
          background: #f0fdf4;
        }
        
        .notes {
          font-size: 0.9em;
          color: #64748b;
        }
        
        .recommendation {
          background: #fef3c7;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
        
        .strengths {
          margin: 5px 0;
          font-size: 0.9em;
          color: #059669;
        }
        
        .concerns {
          color: #dc2626;
          font-size: 0.9em;
          margin-top: 5px;
        }
        
        .strategic-notes {
          background: #ede9fe;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
      `}</style>
    </div>
  )
}