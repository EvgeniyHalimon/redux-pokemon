import React from 'react';
import { fetchPokemons, paginationPokemon } from '../utils/FetchPokemons';
/* 
const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0` */

async function getPokemons(){
    const pokemon = await paginationPokemon(10, 0)
    const one = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/1`)
}

getPokemons()

function PokemonsList(){
    return <ul>LIST</ul>
}

export default PokemonsList