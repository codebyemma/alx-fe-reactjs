import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Search from './components/search'
//import UserData from './components/userData'
//import fetchUserData from './services/githubService'
//import FetchUserData from "./services/githubService";
function App() {
  //fetchUserData();

  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
