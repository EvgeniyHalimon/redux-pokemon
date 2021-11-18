const initialState ={
    pokemon : '',
    pokemonData : {},
    isShow : false,
    pokemonsList : []
}

const reducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type){
    case 'FIND_POKEMON':
        return {
            pokemon : action.payload,
            isShow : true
        }
    case 'SET_POKEMON':
        return {
            pokemon: state.pokemon,
            pokemonData : action.payload,
            isShow : true
        }
    case 'IS_SHOW':
        return {
            ...state,
            isShow : action.payload
        }
    case 'GET_POKEMONS':
        return{
            ...state,
            pokemonsList : action.payload,
            isShow: true
        }
    default:
        return state
    }
}

export default reducer