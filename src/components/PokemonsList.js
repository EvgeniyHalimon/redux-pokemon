import React, {useState, useEffect} from 'react';
import { fetchPokemons, paginationPokemon } from '../utils/FetchPokemons';
import shortid from 'shortid'

const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`



function PokemonsList(){
    const [pokemons, setPokemons] = useState([])

    async function getPokemons(){
        const pokemon = await paginationPokemon(10, 0)
        console.log(pokemon)
        setPokemons(pokemon.data.results)
        console.log(pokemons)
        const one = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/1`)
    }
    
    
    useEffect(() => {
        getPokemons()
    }, []);

    return(
        <ListGroup>
            {pokemons.map(item => (
                <ListGroupItem 
                    key={shortid.generate()}
                    id={item.url}
                    onClick={(e) => console.log(e.target.id)}
                >
                    {item.name}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default PokemonsList