import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Search from './components/search'
import FetchUserData from './services/githubService'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Search /><FetchUserData /></>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
