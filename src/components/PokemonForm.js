import React from 'react';
import { Container, InputGroup, Alert, Button, Form } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input'
import { useDispatch, useSelector } from 'react-redux';
import { findPokemon } from '../actions/actions';
import { fetchPokemons } from '../utils/FetchPokemons';




function PokemonForm(){
    
    const dispatch = useDispatch()
    const pokemonValue = useSelector(state => state.pokemon)
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        const poke = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemonValue}`)
        console.log(poke)
    }

    return(
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <DebounceInput
                    className='form-control'
                    debounceTimeout={3000}
                    value={pokemonValue}
                    type='text'
                    required
                    onChange={(e) => dispatch(findPokemon(e.target.value))}
                />
                <Button
                    variant='warning'
                    type='submit'
                >
                    Get
                </Button>
            </InputGroup>
        </Form>
    )
}

export default PokemonForm