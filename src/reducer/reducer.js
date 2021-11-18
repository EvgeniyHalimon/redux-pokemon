const initialState ={
    pokemon : null,
    pokemonData : {},
    isShow : false,
    pokemonsList : []
}

const reducer = (state = initialState, action) => {
    console.log('~TYPE OF ACTION~', action.type)
    switch (action.type){
    case 'FIND_POKEMON':
        return {
            ...state,
            pokemon : action.payload,
            isShow : true
        }
    case 'SET_POKEMON':
        return {
            ...state,
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