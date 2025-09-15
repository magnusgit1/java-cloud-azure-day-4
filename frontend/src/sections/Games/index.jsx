import { useState, useEffect } from 'react'
import GamesList from './components/GamesList'

function GamesSection() {
  const url = "http://localhost:4000/games"
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const jsonData = await response.json()
      setData(jsonData)
    }
    fetchData()
  }, [])

  return (
    <section>
      <h2>Games Section</h2>
      <div className="scroll-container">
        <GamesList data={data} />
      </div>
    </section>
  )
}

export default GamesSection
