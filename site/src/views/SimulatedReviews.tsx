import React, { useState, useEffect } from 'react'
import { MarkdownView } from '../components/MarkdownView'

interface Review {
  name: string
  path: string
  title: string
  rating: string
}

export const SimulatedReviews: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<string>('README')
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const reviews: Review[] = [
    { name: 'README', path: 'simulated_reviews/README.md', title: 'Overview', rating: '' },
    { name: 'reviewer_1_academic', path: 'simulated_reviews/reviewer_1_academic.md', title: 'Academic Reviewer', rating: '4/5' },
    { name: 'reviewer_2_government', path: 'simulated_reviews/reviewer_2_government.md', title: 'Government Reviewer', rating: '3.5/5' },
    { name: 'reviewer_3_economist', path: 'simulated_reviews/reviewer_3_economist.md', title: 'Economist Reviewer', rating: '4.5/5' },
    { name: 'reviewer_4_opensource', path: 'simulated_reviews/reviewer_4_opensource.md', title: 'Open Source Reviewer', rating: '3.5/5' },
    { name: 'reviewer_5_panel', path: 'simulated_reviews/reviewer_5_panel.md', title: 'Panel Summary', rating: '3.8/5' }
  ]

  useEffect(() => {
    const loadReview = async () => {
      setLoading(true)
      try {
        const review = reviews.find(r => r.name === selectedReview)
        if (review) {
          const response = await fetch(`/content/${review.path}`)
          if (response.ok) {
            const text = await response.text()
            setContent(text)
          } else {
            setContent('# Review not found\n\nThis review file could not be loaded.')
          }
        }
      } catch (error) {
        console.error('Error loading review:', error)
        setContent('# Error Loading Review\n\nThere was an error loading this review.')
      } finally {
        setLoading(false)
      }
    }

    loadReview()
  }, [selectedReview])

  return (
    <div className="simulated-reviews">
      <h1>Simulated POSE Reviews</h1>
      
      <div className="review-notice" style={{
        background: '#fff3cd',
        border: '1px solid #ffc107',
        borderRadius: '4px',
        padding: '12px',
        marginBottom: '20px'
      }}>
        <strong>⚠️ Internal Use Only:</strong> These are simulated reviews created to help anticipate 
        reviewer feedback and strengthen the application. They are not actual NSF reviews.
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <aside style={{ width: '250px', flexShrink: 0 }}>
          <h3>Reviews</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {reviews.map(review => (
              <li key={review.name} style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => setSelectedReview(review.name)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    background: selectedReview === review.name ? '#007bff' : 'white',
                    color: selectedReview === review.name ? 'white' : 'black',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{review.title}</span>
                  {review.rating && (
                    <span style={{ 
                      fontSize: '0.9em', 
                      opacity: 0.8,
                      fontWeight: 'bold'
                    }}>
                      {review.rating}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div style={{ 
            marginTop: '30px', 
            padding: '15px', 
            background: '#f8f9fa', 
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>
            <h4 style={{ marginTop: 0 }}>Average Rating</h4>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#007bff' }}>
              3.8/5
            </div>
            <div style={{ color: '#666', marginTop: '5px' }}>
              Good to Very Good
            </div>
            <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #dee2e6' }}>
              <strong>Recommendation:</strong><br />
              Fund with Conditions
            </div>
          </div>
        </aside>

        <main style={{ flex: 1, minWidth: 0 }}>
          {loading ? (
            <div>Loading review...</div>
          ) : (
            <div className="review-content">
              <MarkdownView content={content} />
            </div>
          )}
        </main>
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#e9ecef', 
        borderRadius: '4px' 
      }}>
        <h3>Key Takeaways Across All Reviews</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#28a745' }}>Consistent Strengths</h4>
            <ul>
              <li>Strong technical foundation</li>
              <li>Novel statistical methods (L0, QRF)</li>
              <li>Real-world adoption demonstrated</li>
              <li>TAXSIM validation (99.7% accuracy)</li>
              <li>MyFriendBen partnership shows impact</li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#dc3545' }}>Consistent Concerns</h4>
            <ul>
              <li>Many [PLACEHOLDER] values</li>
              <li>Governance plan lacks specifics</li>
              <li>Weak community building practices</li>
              <li>Government adoption oversimplified</li>
              <li>Bus factor risk with small team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}