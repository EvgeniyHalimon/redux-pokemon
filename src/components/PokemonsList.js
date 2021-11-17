import React, {useState, useEffect} from 'react';
import { paginationPokemon } from '../utils/FetchPokemons';
import shortid from 'shortid'
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import { Link } from 'react-router-dom';

const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`

function PokemonsList(){
    const [pokemons, setPokemons] = useState([])

    async function getPokemons(){
        const pokemonsList = await paginationPokemon(18, 0)
        setPokemons(pokemonsList.data.results)
    }
    
    
    useEffect(() => {
        getPokemons()
    }, []);

    return(
        <ListGroup style={{width : '10%'}}>
            {pokemons.map((item,index) => (
                <ListGroupItem key={shortid.generate()}>
                    <Link 
                    style={{textDecoration : 'none'}}
                    key={shortid.generate()}
                    id={index + 1}
                    to={`/${index + 1}`}

                    >
                    {`#${index + 1} `}{item.name}
                    </Link>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default PokemonsList