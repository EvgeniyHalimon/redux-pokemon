import React, {useState, useEffect} from 'react';
import { fetchPokemons } from '../utils/FetchPokemons';
import {Card, Container, ListGroup, ListGroupItem} from 'react-bootstrap'
import { useParams } from 'react-router';
import shortid from 'shortid';

const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`




function PokemonCard(){

    const [pokemon, setPokemon] = useState([])
    const [isShow, setIsShow] = useState(false)
    let { number } = useParams()

    const handleFetch = async (number) => {
        const pokemonItem = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${number}`)
        console.log('FETCH CURRENT POKE', pokemonItem.data)
        setPokemon(pokemonItem.data)
        setIsShow(true)
    }

    console.log(pokemon.types)
    console.log(pokemon.stats)

    useEffect(() => {
        handleFetch(number)
    }, []);

    return(
                <Container >
                    {isShow ? 
                    <Card key={shortid.generate()} style={{ width: '18rem' }}>
                        <Card.Img 
                        style={{margin : '0 auto', width: '50%'}}
                        variant="top" 
                        src={pokemon.sprites.front_default} />
                        <Card.Title>{pokemon.name}</Card.Title>
                        <Card.Title># {pokemon.order}</Card.Title>
                        <Card.Text>Abilities</Card.Text>
                        <ListGroup variant="flush">
                            {pokemon.abilities.map(item =>(
                                <ListGroup.Item key={shortid.generate()}>
                                    {item.ability.name}
                                </ListGroup.Item>
                            ))}
                            {/* <ListGroupItem>{.statusbar.stat.name}{item.statusbar.base_stat}</ListGroupItem> */}
                        </ListGroup>
                        <ListGroup variant="flush">
                            {/* {pokemon.abilities.map(item =>(
                                <ListGroup.Item key={shortid.generate()}>
                                    {item.ability.name}
                                </ListGroup.Item>
                            ))} */}
                            {/* <ListGroupItem>{.statusbar.stat.name}{item.statusbar.base_stat}</ListGroupItem> */}
                        </ListGroup>
                    </Card> : 
                    <h1>oops</h1>
                    }
                </Container>
    )
}

export default PokemonCard