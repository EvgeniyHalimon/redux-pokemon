const findPokemon = (value) => {
    return{
        type:'FIND_POKEMON',
        payload:value
    }
}

const setPokemon = (data) => {
    return{
        type:'SET_POKEMON',
        payload: data
    }
}

const isShow = (bool) => {
    return{
        type : 'IS_SHOW',
        payload: bool
    }
}



export{
    findPokemon,
    setPokemon,
    isShow
}