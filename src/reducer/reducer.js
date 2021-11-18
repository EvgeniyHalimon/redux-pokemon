const initialState ={
    pokemon : '',
    pokemonArr : []
}

const reducer = (state = initialState, action) => {
    switch (action.type){
    case 'FIND_POKEMON':
        return {
            pokemon : action.payload
        }
    case 'FETCH_POKEMONS':
        return {
            pokemonArr : action.payload
        }
    default:
        return state
    }
}

export default reducer