import React, {useEffect} from 'react';
import { fetchPokemons } from '../utils/FetchPokemons';
import {Card, Container, ListGroup, Table} from 'react-bootstrap'
import { useParams } from 'react-router';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { isShow, setPokemon } from '../actions/actions';

const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`




function PokemonCard(){

    
    let { number } = useParams()

    const dispatch = useDispatch()
    const show = useSelector(state => state.isShow) 
    const pokemon = useSelector(state => state.pokemonData)

    const handleFetch = async (number) => {
        const pokemonItem = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${number}`)
        console.log('FETCH CURRENT POKE', pokemonItem.data)

        dispatch(setPokemon(pokemonItem.data))
        console.log('before', show)

        dispatch(isShow(true))

        console.log('after', show)
        console.log('i hate redux',pokemon)
    }

    useEffect(() => {
        handleFetch(number)
    }, [show]);

    return(
        <Container >
        {show ? 
        <Card key={shortid.generate()} style={{ width: '18rem', margin : '0 auto' }}>
            <Card.Img 
            style={{margin : '0 auto', width: '60%'}}
            variant="top" 
            src={pokemon.sprites.front_default} />
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Title># {pokemon.order}</Card.Title>
            <Container style={{display : 'flex', padding : '0'}}>
                    <Container style={{padding: '0', width: '48%'}}>
                        <ListGroup>
                        <ListGroup.Item  variant='dark'>
                            Abilities
                        </ListGroup.Item>
                            {pokemon.abilities.map(item =>(
                                <ListGroup.Item  variant='info' key={shortid.generate()}>
                                    {item.ability.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup> 
                        <ListGroup>
                        <ListGroup.Item  variant='dark'>
                            Type
                        </ListGroup.Item>
                            {pokemon.types.map(item =>(
                                <ListGroup.Item  variant='info' key={shortid.generate()}>
                                    {item.type.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup> 
                    </Container>
                    <ListGroup>
                    <ListGroup.Item variant='dark'>
                        Stats
                    </ListGroup.Item>
                        {pokemon.stats.map(item =>(
                            <ListGroup.Item  variant='info' key={shortid.generate()}>
                                {item.stat.name} {item.base_stat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup> 
            </Container>
        </Card> : 
        <h1>oops</h1>
        }
    </Container>
    )
}

export default connect()(PokemonCard)