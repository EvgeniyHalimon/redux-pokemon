import axios from 'axios'

export async function fetchPokemons(url) {
    const pokemons = await axios.get(url)
    return pokemons
}

export async function paginationPokemon(limit,offset) {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
    return pokemons
}