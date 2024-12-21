import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import NousDecouvrir from './pages/NousDecouvrir';
import NosActions from './pages/NosActions';
import Actualite from './pages/Actualite';
import NousSoutenir from './pages/NousSoutenir';
import Contact from './pages/Contact';
import Centres from './pages/Centres';
import Navbar from './components/Navbar';
import './tailwind.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/decouvrir" element={<NousDecouvrir />} />
          <Route path="/actions" element={<NosActions />} />
          <Route path="/centres" element={<Centres />} />
          <Route path="/actualite" element={<Actualite />} />
          <Route path="/soutenir" element={<NousSoutenir />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;