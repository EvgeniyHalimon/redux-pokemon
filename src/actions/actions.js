const findPokemon = (q) => {
    return{
        type:'FIND_POKEMON',
        payload:CountQueuingStrategy
    }
}

const fetchPokemon = (q) => {
    return{
        type:'FETCH_POKEMONS',
        payload:q
    }
}

export{
    findPokemon,
    fetchPokemon
}