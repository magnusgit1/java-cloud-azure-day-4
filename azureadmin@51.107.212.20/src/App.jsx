import GamesSection from './sections/Games'
import BooksSection from './sections/Books'
import UsersSection from './sections/Users'
import './App.css'

function App() {
  return (
    <div className="main-layout">
      <GamesSection />
      <UsersSection />
      <BooksSection />
    </div>
  )
}

export default App
