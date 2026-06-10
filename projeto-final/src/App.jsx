import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
 
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */

function App() {
  return (
    <>
      <Header />
      <Home />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App
