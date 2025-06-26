import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Divisi from './components/Divisi';
import Event from './components/Event';
import Pfik from './components/Pfik';
import FikomNight from './components/FikomNight';
import ImKomCup from './components/ImKomCup';
import Commfest from './components/Commfest';
import DivisiBph from './components/DivisiBph';
import DivisiHumas from './components/DivisiHumas';
import DivisiKominfo from './components/DivisiKominfo';
import DivisiMiba from './components/DivisiMiba';
import DivisiApm from './components/DivisiApm';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/divisi" element={<Divisi />} />
        <Route path="/divisi/bph" element={<DivisiBph />} />
        <Route path="/divisi/humas" element={<DivisiHumas />} />
        <Route path="/divisi/kominfo" element={<DivisiKominfo />} />
        <Route path="/divisi/miba" element={<DivisiMiba />} />
        <Route path="/divisi/apm" element={<DivisiApm />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/pfik" element={<Pfik />} />
        <Route path="/event/fikom-night" element={<FikomNight />} />
        <Route path="/event/im-kom-cup" element={<ImKomCup />} />
        <Route path="/event/commfest" element={<Commfest />} />
        {/* Catch-all route for 404 - must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;