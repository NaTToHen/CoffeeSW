import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/home/Home';
import Catalogo from './components/catalogo/Catalogo';
import Sobre from './components/sobre/Sobre';
import CafePerfil from './components/catalogo/CafePerfil';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/catalogo/cafe/:id" element={<CafePerfil />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
   </Router> 
  )
}

export default App;
