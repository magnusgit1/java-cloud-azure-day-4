import { useState, useEffect } from 'react'
import BooksList from './components/BooksList'

function BooksSection() {
  const url = "/books"
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
      <h2>Books Section</h2>
      <div className="scroll-container">
        <BooksList data={data} />
      </div>
    </section>
  )
}

export default BooksSection
