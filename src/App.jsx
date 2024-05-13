import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile';
import MoviesList from './components/MoviesList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <UserProfile />
      <hr></hr>
      <MoviesList />
    </div>
  )
}

export default App
