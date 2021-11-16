import axios from 'axios';
import React from 'react';

async function getPokemons(){
    const pokemons = await axios.get(`http://pokeapi.co/api/v2/pokemon/?limit=898`)
    console.log(pokemons)
    const pokemonPagination = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=20`)
    console.log(pokemonPagination)
}

getPokemons()

function PokemonCard(){
    return(
        <h1>CAR</h1>
    )
}

export default PokemonCard