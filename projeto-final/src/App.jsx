import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
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
    <ChakraProvider>
      <Header />
<<<<<<< HEAD
      <Footer />
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home />} />
        </Routes> */}
      </BrowserRouter>
{/*       <Footer />
 */}    </>
=======
      <Home />
    </ChakraProvider>
>>>>>>> b9bff12c9973c4d9289299625801582cbde8f9aa
  );
}

export default App
