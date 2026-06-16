import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import Footer from './components/Footer';
import { DetalhesProdutos } from './components/DetalhesProdutos';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<DetalhesProdutos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />      
    </ChakraProvider>
  );
}

export default App
