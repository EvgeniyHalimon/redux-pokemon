import React, { useEffect } from 'react';
import { Container, InputGroup, Alert, Button, Form, Card, ListGroup } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input'
import { connect, useDispatch, useSelector } from 'react-redux';
import { findPokemon, setPokemon, isShow } from '../actions/actions';
import { fetchPokemons } from '../utils/FetchPokemons';
import shortid from 'shortid';




function PokemonForm(){
    
    const dispatch = useDispatch()
    const pokemonValue = useSelector(state => state.pokemon)
    const show = useSelector(state => state.isShow)
    const pokemon = useSelector(state => state.pokemonData)
    
    console.log(pokemonValue)

    const handle = async() => {  
        
        const poke = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
        
        setTimeout(() => {
            dispatch(() => setPokemon(poke.data))
            dispatch(isShow(!show))
            console.log('Timeout FETCH', poke.data)
            console.log('Timeout POKEMON', pokemon)
        }, 5000);
        console.log('VALUE OF FETCH', poke.data)
        console.log('WHOS THAT POKEMON', pokemon)
        console.log(show)
    }

    

    useEffect(() => {
        
    }, [show]);

    return(
        <Container>
                <InputGroup>
                    <DebounceInput
                        className='form-control'
                        debounceTimeout={5000}
                        value={pokemonValue}
                        type='text'
                        required
                        onChange={(e) => dispatch(findPokemon(e.target.value))}
                    />
                    <Button
                        variant='warning'
                        type='submit'
                        onClick={() => handle()}
                    >
                        Get
                    </Button>
                </InputGroup>
            {/*{show ? 
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
        } */}
        </Container>
    )
}

export default connect()(PokemonForm)