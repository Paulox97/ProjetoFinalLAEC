import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
 
/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png' */

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App
