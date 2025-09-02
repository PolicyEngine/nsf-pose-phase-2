import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

interface LetterDraft {
  name: string
  organization: string
  filename: string
  submittedFilename?: string
  status: 'draft' | 'sent' | 'confirmed' | 'received'
  notes: string
}

const letterDrafts: LetterDraft[] = [
  {
    name: "James Poterba",
    organization: "NBER",
    filename: "poterba_nber_draft.md",
    status: "draft",
    notes: "Emphasizes MOU, TAXSIM comparison tool, open vs closed source advantages"
  },
  {
    name: "John Sabelhaus",
    organization: "Brookings/Michigan",
    filename: "sabelhaus_draft.md",
    submittedFilename: "sabelhaus_submitted.md",
    status: "received",
    notes: "Very strong letter - 'strongly urge NSF support', mentions longitudinal file development"
  },
  {
    name: "George Callas",
    organization: "Arnold Ventures",
    filename: "callas_arnold_draft.md",
    status: "draft",
    notes: "Funding commitment, congressional use, 2025 reconciliation, AMT-SALT analysis"
  },
  {
    name: "Mark Franks",
    organization: "Nuffield Foundation",
    filename: "franks_nuffield_draft.md",
    submittedFilename: "franks_submitted_final.md",
    status: "received",
    notes: "Strong letter received - mentions Cabinet Office, NIESR, NEF, endorses organization"
  },
  {
    name: "Martin Perron",
    organization: "Canadian Digital Service",
    filename: "perron_canada_draft.md",
    status: "draft",
    notes: "Rules as Code alignment, international expansion, government modernization"
  },
  {
    name: "Matthew Unrath",
    organization: "USC",
    filename: "unrath_usc_draft.md",
    submittedFilename: "unrath_submitted.md",
    status: "received",
    notes: "Census experience, HHS project on cliff effects, government adoption pathway"
  }
]

export const LettersInternal: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [letterContent, setLetterContent] = useState<string>('')
  const [selectedEmail, setSelectedEmail] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [viewMode, setViewMode] = useState<'draft' | 'submitted'>('draft')
  const base = import.meta.env.BASE_URL || '/'

  useEffect(() => {
    if (selectedLetter) {
      setLoading(true)
      const letter = letterDrafts.find(l => l.filename === selectedLetter)
      const folder = viewMode === 'submitted' ? 'submitted' : 'drafts'
      const filename = viewMode === 'submitted' && letter?.submittedFilename ? 
        letter.submittedFilename : selectedLetter
      
      fetch(`${base}docs/pose/letters/${folder}/${filename}`)
        .then(res => res.text())
        .then(text => {
          setLetterContent(text)
          setLoading(false)
        })
        .catch(() => {
          setLetterContent('*Letter not found. The letters need to be synced to the site.*')
          setLoading(false)
        })
    }
  }, [selectedLetter, viewMode, base])

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'received': return '#22c55e'
      case 'confirmed': return '#3b82f6'
      case 'sent': return '#f59e0b'
      default: return '#94a3b8'
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('Copied to clipboard!')
  }

  const emailTemplates = {
    poterba: `Subject: Urgent: NSF POSE Letter - Due Today

Dear Jim,

I hope you enjoyed the holiday weekend. 

Sorry to ask but I have a last-minute request! We're applying for an NSF grant due today (Tuesday) at 5pm ET, and your support would be invaluable. Since our Phase I award and the MOU between NBER and PolicyEngine, our collaboration has deepened significantly—we've built an automated validation tool and are now building a TAXSIM emulator using PolicyEngine on the backend, working closely with Dan on comprehensive validation frameworks.

We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/15reT-fyEga7NqolOo07jCP_2KAuG2VcHhNGOPKC0s38/edit?tab=t.0) emphasizing:
- The MOU and deepened collaboration since Phase I
- The validation tool we've built and TAXSIM emulator we're building (using PolicyEngine backend)
- NBER's exploration of PolicyEngine and the advantages of open source over TAXSIM's closed model
- Opportunities for contributing data and expertise to the Open-Source Ecosystem
- The strategic importance for economic research infrastructure

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this on NBER letterhead by 3pm ET? Feel free to revise or provide as-is. Your support would demonstrate the research community's commitment to our Open-Source Ecosystem.

I apologize for the last-minute request.

Many thanks,
Max`,

    sabelhaus: `Subject: Urgent: NSF POSE Letter - Due Today

Dear John,

I hope you enjoyed the holiday weekend.

Sorry to ask but I have a last-minute request! We're applying for an NSF grant due today (Tuesday) at 5pm ET. Your unique perspective—having built CBOLT at CBO and now coordinating TAXSIM users while exploring PolicyEngine for your SCF and Social Security work—would be incredibly powerful. You've seen firsthand the transformation from closed to open source models.

We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/1f5vldW-FKKrq6FHptLXgwro9NuTIThKrdyGDkUZTyDo/edit?usp=sharing) emphasizing:
- Your experience with the limitations of closed models and advantages of open source
- Current exploration of PolicyEngine for SCF integration and Social Security reform analysis
- Your role coordinating government and Brookings economists
- The importance of transparency for public trust in policy analysis

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this on letterhead by 3pm ET? Feel free to revise or provide as-is. Your authentic voice on the open source transformation would be invaluable.

I apologize for the last-minute request. Your support would make a huge difference.

Best,
Max`,

    callas: `Subject: Urgent: NSF POSE Letter - Due Today

Dear George,

I hope you enjoyed the holiday weekend.

Sorry to ask but I have a last-minute request! We're applying for an NSF grant due today (Tuesday) at 5pm ET. Arnold Ventures' support has been transformative for PolicyEngine—from behavioral responses to SALT-AMT analysis to state/district breakdowns. Your team's use of PolicyEngine for the 2025 reconciliation analysis perfectly demonstrates the practical policy impact we're achieving.

We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/1t0BPwxGCJ-lJoo0EkK9qrMkmHVTM2tBW-5UtxhpWJpY/edit?usp=sharing) covering:
- Arnold's three grants to PolicyEngine and active use in congressional engagement
- The critical timing with 2025 reconciliation and TCJA expiration
- How open source democratizes policy analysis
- Arnold's strategic engagement with the OSE (not committing to future funding, of course)

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this on Arnold letterhead by 3pm ET? Feel free to revise or provide as-is. Your perspective on PolicyEngine's role in evidence-based policymaking would be powerful.

I apologize for the last-minute request. Your support would be crucial for demonstrating sustainability.

Thanks,
Max`,

    perron: `Subject: Urgent: NSF POSE Letter - Due Today

Dear Martin,

I hope you enjoyed the holiday weekend.

Sorry to ask but I have a last-minute request! We're applying for an NSF grant due today (Tuesday) at 5pm ET. Your Rules as Code expertise and exploration of PolicyEngine for Canadian government systems would provide invaluable international validation. You understand better than anyone how PolicyEngine embodies Rules as Code principles.

We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/1-JFQfM1N1xb_Npbsi-D-5W2rnX10u3K_Tt0kPleb7d8/edit?usp=sharing) highlighting:
- Alignment between PolicyEngine and Rules as Code principles
- Your exploration of PolicyEngine for Canadian government systems
- The international collaboration potential
- Why government needs open source policy tools

Given government constraints, if an official letter isn't possible, a letter in your personal capacity as a Rules as Code expert would be equally valuable.

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this by 3pm ET? Feel free to revise or provide as-is. Your authentic perspective on government modernization through open tools would be powerful.

I apologize for the last-minute request. Your support would demonstrate crucial government adoption potential.

Best,
Max`,

    franks: `Subject: Urgent: NSF POSE Letter - Due Today

Dear Mark,

I hope this finds you well.

Sorry to ask but I have a last-minute request! We're applying for an NSF grant due today (Tuesday) at 5pm ET. Nuffield's £251,296 grant has been transformative for PolicyEngine UK, and your perspective on the impact we've had—particularly through the Cabinet Office secondment documented in HM Treasury's Algorithmic Transparency Record—would be invaluable for demonstrating international adoption.

We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/1EGoiJTJy7rccOweetHiFhZSUxiCwgxvWQ-v58AUyHrA/edit?usp=sharing) highlighting:
- Nuffield's investment and UK government engagement
- The Cabinet Office secondment documented in HM Treasury's record
- International collaboration benefits between US/UK implementations
- Alignment with Nuffield's social justice mission

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this on Nuffield letterhead by 3pm ET? Feel free to revise or provide as-is. Your authentic voice on PolicyEngine's democratic impact would be powerful. Of course, this doesn't commit Nuffield to future funding—just acknowledgment of current support and impact.

I apologize for the last-minute request. Your support would demonstrate crucial international validation.

Best,
Max`,

    unrath: `Subject: Urgent: NSF POSE Letter - Due Today

Dear Matt,

I hope you enjoyed the holiday weekend. Thank you again for your letter of support for the PBIF proposal—it was incredibly helpful, and we should know by the end of the month.

Sorry to ask but I have another last-minute request! We're applying for an NSF grant due today (Tuesday) at 2pm PT, and your unique perspective would add a lot of value. We just received POSE Phase I in August (Pathways to Enable Open-Source Ecosystems)—a planning grant to establish sustainable communities. We initially thought this made us ineligible for Phase II, but recently discovered we could still apply, hence the very short notice.

I've drafted a letter [here](https://docs.google.com/document/d/1Oa_0lLyi37JX7qz6GOb23KlPGTlG_SZnImwMphU7E7c/edit?usp=sharing) emphasizing:
- How PolicyEngine unlocked your IRP/HHS project on cliff analysis
- Census experience and the limitations you faced with closed models
- Your connections with Rothbaum and potential for Census adoption
- The importance for government transparency and academic research

You can learn more about our application at [policyengine.github.io/nsf-pose-phase-2](https://policyengine.github.io/nsf-pose-phase-2), and the POSE program [here](https://new.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose).

By any chance could you send this on USC letterhead by noon PT? Feel free to revise or provide as-is. Your perspective bridging government and academia would be powerful.

I apologize for the last-minute request. Your support would really strengthen our academic+government adoption narrative.

Thanks,
Max`
  }

  return (
    <div className="letters-internal">
      <h1>Internal Letter Drafts & Status</h1>
      
      <div className="deadline-warning">
        <strong>⚠️ DEADLINE: Tuesday 5:00 PM Eastern</strong>
        <p>Letters requested by 3:00 PM ET to allow buffer time</p>
      </div>

      <div className="letter-grid">
        <div className="letter-list">
          <h2>Letter Status</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Organization</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {letterDrafts.map(letter => (
                <tr key={letter.filename}>
                  <td><strong>{letter.name}</strong></td>
                  <td>{letter.organization}</td>
                  <td>
                    <span style={{color: getStatusColor(letter.status)}}>
                      {letter.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button onClick={() => {
                      setSelectedLetter(letter.filename)
                      setSelectedEmail('')
                      setViewMode('draft')
                    }}>
                      View Draft
                    </button>
                    {letter.submittedFilename && (
                      <button onClick={() => {
                        setSelectedLetter(letter.filename)
                        setSelectedEmail('')
                        setViewMode('submitted')
                      }}>
                        View Submitted
                      </button>
                    )}
                    <button onClick={() => {
                      const nameToKey: Record<string, string> = {
                        'James Poterba': 'poterba',
                        'John Sabelhaus': 'sabelhaus',
                        'George Callas': 'callas',
                        'Mark Franks': 'franks',
                        'Martin Perron': 'perron',
                        'Matthew Unrath': 'unrath'
                      }
                      const key = nameToKey[letter.name]
                      const email = emailTemplates[key as keyof typeof emailTemplates] || ''
                      setSelectedEmail(email)
                      setSelectedLetter(null)
                    }}>
                      View Email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="letter-preview">
          {selectedLetter ? (
            loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="preview-header">
                  <h2>Letter Preview - {viewMode === 'submitted' ? 'Submitted Version' : 'Draft Version'}</h2>
                  <div>
                    {letterDrafts.find(l => l.filename === selectedLetter)?.submittedFilename && (
                      <>
                        <button 
                          onClick={() => setViewMode('draft')}
                          style={{marginRight: '10px', fontWeight: viewMode === 'draft' ? 'bold' : 'normal'}}
                        >
                          View Draft
                        </button>
                        <button 
                          onClick={() => setViewMode('submitted')}
                          style={{marginRight: '10px', fontWeight: viewMode === 'submitted' ? 'bold' : 'normal'}}
                        >
                          View Submitted
                        </button>
                      </>
                    )}
                    <button onClick={() => copyToClipboard(letterContent)}>
                      Copy Letter Text
                    </button>
                  </div>
                </div>
                <div className="letter-content">
                  <ReactMarkdown>{letterContent}</ReactMarkdown>
                </div>
              </>
            )
          ) : selectedEmail ? (
            <>
              <div className="preview-header">
                <h2>Email Template</h2>
                <button onClick={() => copyToClipboard(selectedEmail)}>
                  Copy Email Text
                </button>
              </div>
              <div className="letter-content">
                <pre style={{whiteSpace: 'pre-wrap', fontFamily: 'inherit'}}>{selectedEmail}</pre>
              </div>
            </>
          ) : (
            <p>Select a letter or email to preview</p>
          )}
        </div>
      </div>

      <div className="email-templates">
        <h2>Quick Actions Checklist</h2>
        <ol>
          <li>Copy email template for each person</li>
          <li>Attach their draft letter (from docs/pose/letters/drafts/)</li>
          <li>Send ASAP (Labor Day evening)</li>
          <li>Follow up Tuesday morning if no response</li>
          <li>Request letters on official letterhead</li>
          <li>Remind them: 2 page maximum, due by 3pm ET Tuesday</li>
        </ol>
      </div>

      <div className="key-points">
        <h2>Key Points to Emphasize</h2>
        <ul>
          <li><strong>Urgency</strong>: Due Tuesday 5pm ET, requesting by 3pm ET for safety</li>
          <li><strong>Flexibility</strong>: Drafts save time but they should revise as needed</li>
          <li><strong>Letterhead</strong>: Must be on official letterhead (or personal if government)</li>
          <li><strong>Length</strong>: Maximum 2 pages per NSF requirements</li>
          <li><strong>Format</strong>: PDF preferred</li>
        </ul>
      </div>

      <style jsx>{`
        .letters-internal {
          padding: 20px;
          max-width: 1600px;
          margin: 0 auto;
        }
        
        .deadline-warning {
          background: #fef2f2;
          border: 2px solid #ef4444;
          padding: 15px;
          margin: 20px 0;
          border-radius: 8px;
          text-align: center;
        }
        
        .deadline-warning strong {
          color: #dc2626;
          font-size: 1.2em;
        }
        
        .letter-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 20px;
          margin: 20px 0;
        }
        
        .letter-list {
          background: #f8fafc;
          padding: 20px;
          border-radius: 8px;
        }
        
        .letter-list table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .letter-list th,
        .letter-list td {
          padding: 8px;
          text-align: left;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .letter-list button {
          margin: 0 5px;
          padding: 4px 8px;
          background: #3b82f6;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .letter-list button:hover {
          background: #2563eb;
        }
        
        .letter-preview {
          background: white;
          padding: 20px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          max-height: 800px;
          overflow-y: auto;
        }
        
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .preview-header button {
          padding: 8px 16px;
          background: #22c55e;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .letter-content {
          font-family: 'Times New Roman', serif;
          line-height: 1.6;
        }
        
        .letter-content h1 {
          font-size: 1.2em;
          margin: 20px 0 10px;
        }
        
        .letter-content h2 {
          font-size: 1.1em;
          margin: 15px 0 10px;
        }
        
        .email-templates {
          background: #fef3c7;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
        
        .key-points {
          background: #dcfce7;
          padding: 20px;
          margin: 20px 0;
          border-radius: 8px;
        }
        
        .key-points ul {
          margin: 10px 0;
        }
        
        .key-points li {
          margin: 5px 0;
        }
      `}</style>
    </div>
  )
}
