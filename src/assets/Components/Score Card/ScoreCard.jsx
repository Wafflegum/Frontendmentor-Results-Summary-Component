import React from 'react'
import './ScoreCard.css'
const ScoreCard = () => {
  return (
    <>
    <div className="score-card-container">
        <div className="score-header">Summary</div>
        <div className="scorelist">
            <div className="category" id="reaction">
              <img src="src/assets/images/icon-reaction.svg" alt="" />
              <div className="score-name">
                Reaction
              </div>
              <div className="score-number">
                <span className='score'>80</span> / 100
              </div>                
            </div>

            <div className="category" id="memory">
              <img src="src/assets/images/icon-memory.svg" alt="" />

              <div className="score-name">
                Memory
              </div>
              <div className="score-number">
                <span className='score'>92</span> / 100
              </div>
            </div>
                
            <div className="category" id="verbal">
              <img src="src/assets/images/icon-verbal.svg" alt="" />
              <div className="score-name">
                Verbal
              </div>
              <div className="score-number">
                <span className='score'>61</span> / 100
              </div>
            </div>

            <div className="category" id="visual">
              <img src="src/assets/images/icon-visual.svg" alt="" />
              <div className="score-name">
                Visual
              </div>
              <div className="score-number">
                <span className='score'>72</span> / 100
              </div>
            </div>
        </div>
        <div className="continue-btn">Continue</div>
    </div>
    </>
  )
}

export default ScoreCard