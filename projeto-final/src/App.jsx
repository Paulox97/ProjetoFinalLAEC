import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Footer from './components/Footer';
 
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */

function App() {
  return (
    <>
      <Header />
      <Footer />
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </BrowserRouter>
{/*       <Footer />
 */}    </>
  );
}

export default App
