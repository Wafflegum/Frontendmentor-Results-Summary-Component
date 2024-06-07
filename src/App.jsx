import { useState } from 'react'
import './App.css'
import ResultCard from './assets/Components/Result Card/ResultCard'
import ScoreCard from './assets/Components/Score Card/ScoreCard'

function App() {

  return (
    <>
      <div className="container">
        <ResultCard/>
        <ScoreCard/>
      </div>

    </>
  )
}

export default App
