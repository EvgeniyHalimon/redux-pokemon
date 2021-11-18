import React, { useEffect, useState } from 'react';
import { Container, InputGroup, Alert, Button, Form } from 'react-bootstrap';
import {DebounceInput} from 'react-debounce-input'
import { fetchPokemons } from '../utils/FetchPokemons';




function PokemonForm(){
    
    const [pokemon, setPokemon] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const poke = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        console.log('FETCH CURRENT POKE', poke)
    }
    return(
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <DebounceInput
                    className='form-control'
                    debounceTimeout={3000}
                    value={pokemon}
                    type='text'
                    required
                    onChange={(e) => setPokemon(e.target.value)}
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