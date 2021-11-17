import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonsList from './PokemonsList';
import PokemonCard from './PokemonCard';

function List() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*"  element={<PokemonsList/>}/>
        <Route path="/:number" element={<PokemonCard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default List;