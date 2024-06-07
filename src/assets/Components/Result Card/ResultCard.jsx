import React from 'react'
import './ResultCard.css'

const ResultCard = () => {
  return (
    <div className="result-card-container">
        <div className="result-header">Your Result</div>

        <div className="result-score">
            <div className="main-score">76</div>
            <div className="max-score">of 100</div>
        </div>
    
        <div className="score-description">Great</div>
        <div className="score-comparison">You scored higher than 65% of the people who have taken these tests.</div>
        
        </div>
  )
}

export default ResultCard