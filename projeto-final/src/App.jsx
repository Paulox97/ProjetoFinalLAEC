import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Footer from './components/Footer';
import { DetalhesProdutos } from './components/DetalhesProdutos';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalhesProdutos />} />
      </Routes>
      <Footer />      
    </ChakraProvider>
  );
}

export default App
