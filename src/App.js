import React from 'react';
import './style.css';
import PokeHeader from './components/PokeHeader';
import PokeFooter from './components/PokeFooter';
import PokeHome from './components/PokeHome'
import PokeDex from './components/PokeDex'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <PokeHeader />
        <Routes>
          <Route path="/" element={<PokeHome />} />
          <Route path="/pokedex" element={<PokeDex />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
      <PokeFooter />
    </div>
  );
}

export default App;
