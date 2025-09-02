import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

interface LetterDraft {
  name: string
  organization: string
  filename: string
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
    status: "draft",
    notes: "Personal experience with closed vs open source, Social Security reform, CBO background"
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
    status: "draft",
    notes: "£250k UK funding, Cabinet Office secondment impact, international collaboration"
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
    status: "draft",
    notes: "Census experience, HHS project on cliff effects, government adoption pathway"
  }
]

export const LettersInternal: React.FC = () => {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null)
  const [letterContent, setLetterContent] = useState<string>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (selectedLetter) {
      setLoading(true)
      fetch(`/docs/pose/letters/drafts/${selectedLetter}`)
        .then(res => res.text())
        .then(text => {
          setLetterContent(text)
          setLoading(false)
        })
        .catch(() => {
          setLetterContent('*Letter draft not found. The draft letters need to be synced to the site.*')
          setLoading(false)
        })
    }
  }, [selectedLetter])

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
    poterba: `Subject: Urgent: NSF POSE Phase II Letter of Support - Due Tomorrow 5pm

Dear Jim,

I hope this email finds you well. I'm reaching out with an urgent request for a letter of support for our NSF POSE Phase II proposal, which is due tomorrow (Tuesday) at 5pm.

Since our Phase I award and the MOU between NBER and PolicyEngine, our collaboration has deepened significantly—we've built the automated TAXSIM comparison tool and have been working closely with Dan on validation. Your support would be invaluable in demonstrating the research community's commitment to our Open-Source Ecosystem.

To save you time given the tight deadline, I've drafted a letter (attached) that you're welcome to edit as you see fit. The key points it covers:
- The MOU and deepened collaboration since Phase I
- NBER's use of PolicyEngine and the advantages of open source over TAXSIM's closed model
- Commitment to contributing data and expertise to the OSE
- The strategic importance for economic research infrastructure

Would you be able to review and send the letter on NBER letterhead by tomorrow afternoon? Any modifications you'd like to make are of course welcome.

I apologize for the short notice—we've been pushing hard on the technical proposal and are now finalizing support letters.

Many thanks,
Max`,

    sabelhaus: `Subject: Urgent: NSF POSE Phase II Letter - Your Open Source Advocacy Needed

Dear Jason,

I hope you're well. I need your help with an urgent letter of support for our NSF POSE Phase II proposal, due tomorrow at 5pm.

Your unique perspective—having built CBOLT at CBO and now coordinating TAXSIM users while using PolicyEngine for your SCF and Social Security work—would be incredibly powerful. You've seen firsthand the transformation from closed to open source models.

I've drafted a letter (attached) emphasizing:
- Your experience with the limitations of closed models and advantages of open source
- Current use of PolicyEngine for SCF integration and Social Security reform analysis
- Your role coordinating government and Brookings economists
- The importance of transparency for public trust in policy analysis

Could you review and send on letterhead by tomorrow afternoon? Please feel free to modify anything—your authentic voice on the open source transformation would be invaluable.

Apologies for the last-minute request. Your support would make a huge difference.

Best,
Max`,

    callas: `Subject: Urgent: NSF POSE Phase II Letter - Arnold Ventures Support

Dear George,

I hope this finds you well. I'm writing with an urgent request for a letter of support for our NSF POSE Phase II proposal, due tomorrow at 5pm.

Arnold Ventures' support has been transformative for PolicyEngine—from local area modeling to our enhanced CPS. Your team's use of PolicyEngine for the 2025 reconciliation analysis, especially disentangling AMT-SALT interactions, perfectly demonstrates the practical policy impact we're achieving.

I've attached a draft letter that covers:
- Arnold's three grants to PolicyEngine and active use in congressional engagement
- The critical timing with 2025 reconciliation and TCJA expiration
- How open source democratizes policy analysis
- Arnold's potential ongoing support for the OSE

Would you be able to send this on Arnold letterhead by tomorrow afternoon? Any edits are welcome—your perspective on PolicyEngine's role in evidence-based policymaking would be powerful.

Sorry for the short notice. Your support would be crucial for demonstrating sustainability.

Thanks,
Max`,

    perron: `Subject: Urgent: NSF POSE Support Letter - Rules as Code Perspective

Dear Martin,

I hope you're doing well. I'm reaching out with an urgent request—we need a letter of support for our NSF POSE Phase II proposal by tomorrow 5pm.

Your Rules as Code expertise and work to integrate PolicyEngine into Canadian government systems would provide invaluable international validation. You understand better than anyone how PolicyEngine embodies Rules as Code principles.

I've drafted a letter (attached) highlighting:
- Alignment between PolicyEngine and Rules as Code principles
- Your efforts to integrate PolicyEngine in Canadian government
- The international collaboration potential
- Why government needs open source policy tools

Given government constraints, if an official letter isn't possible, a letter in your personal capacity as a Rules as Code expert would be equally valuable.

Could you review and send by tomorrow afternoon? Please modify as needed—your authentic perspective on government modernization through open tools would be powerful.

Apologies for the rushed timeline. Your support would demonstrate crucial government adoption potential.

Best,
Max`,

    franks: `Subject: Urgent: NSF POSE Phase II Letter - UK Impact & International Collaboration

Dear Mark,

I hope this finds you well. I'm writing with an urgent request for a letter of support for our NSF POSE Phase II proposal, due tomorrow at 5pm EST.

Nuffield's £250,000 grant has been transformative for PolicyEngine UK, and your perspective on the impact we've had—particularly through the Cabinet Office secondment and the transparency it's brought to UK policy making—would be invaluable for demonstrating international adoption and collaboration potential.

I've attached a draft letter highlighting:
- Nuffield's investment and the impact on UK government transparency
- The Cabinet Office secondment and parliamentary engagement
- International collaboration benefits between US/UK implementations
- Alignment with Nuffield's social justice mission

Would you be able to review and send on Nuffield letterhead by tomorrow afternoon? Please feel free to modify—your authentic voice on PolicyEngine's democratic impact would be powerful.

Apologies for the extremely short notice. Your support would demonstrate crucial international validation.

Best,
Max`,

    unrath: `Subject: Urgent: NSF POSE Letter - Census/HHS Research Perspective

Dear Matt,

I hope you're well. I need your help with an urgent letter of support for our NSF POSE Phase II proposal, due tomorrow at 5pm.

Your unique perspective—from Census NEWS project experience with TAXSIM to your current HHS-funded work on marginal tax rates and cliffs using PolicyEngine—would be incredibly valuable. You've seen both the government need and academic research applications.

I've drafted a letter (attached) that emphasizes:
- Your current IRP/HHS project using PolicyEngine for cliff analysis
- Census experience and the limitations you faced with closed models
- Your connections with Rothbaum and potential for Census adoption
- The importance for government transparency and academic research

Could you send this on USC letterhead by tomorrow afternoon? Please feel free to edit—your perspective bridging government and academia would be powerful.

Sorry for the last-minute request. Your support would really strengthen our government adoption narrative.

Thanks,
Matt`
  }

  return (
    <div className="letters-internal">
      <h1>Internal Letter Drafts & Status</h1>
      
      <div className="deadline-warning">
        <strong>⚠️ DEADLINE: Tomorrow (Tuesday) 5:00 PM Eastern</strong>
        <p>Current time: Monday 9:00 PM - Less than 20 hours remaining!</p>
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
                    <button onClick={() => setSelectedLetter(letter.filename)}>
                      View Draft
                    </button>
                    <button onClick={() => {
                      const key = letter.name.split(' ')[0].toLowerCase()
                      copyToClipboard(emailTemplates[key as keyof typeof emailTemplates] || '')
                    }}>
                      Copy Email
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
                  <h2>Letter Preview</h2>
                  <button onClick={() => copyToClipboard(letterContent)}>
                    Copy Letter Text
                  </button>
                </div>
                <div className="letter-content">
                  <ReactMarkdown>{letterContent}</ReactMarkdown>
                </div>
              </>
            )
          ) : (
            <p>Select a letter to preview</p>
          )}
        </div>
      </div>

      <div className="email-templates">
        <h2>Quick Actions Checklist</h2>
        <ol>
          <li>Copy email template for each person</li>
          <li>Attach their draft letter (from docs/pose/letters/drafts/)</li>
          <li>Send ASAP (tonight if possible)</li>
          <li>Follow up tomorrow morning if no response</li>
          <li>Request letters on official letterhead</li>
          <li>Remind them: 2 page maximum, due by 4pm to leave buffer</li>
        </ol>
      </div>

      <div className="key-points">
        <h2>Key Points to Emphasize</h2>
        <ul>
          <li><strong>Urgency</strong>: Due tomorrow 5pm, need by 4pm for safety</li>
          <li><strong>Flexibility</strong>: Drafts are just templates - they should edit freely</li>
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