import React from 'react';
import { fetchPokemons } from '../utils/FetchPokemons';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'


const url = `http://pokeapi.co/api/v2/pokemon/?limit=898`
const url1 = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=0`


function PokemonCard({name}){
    return(
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={sprites.front_default} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{order}</Card.Title>
                <Card.Text>
                    {types.type.name}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{statusbar.stat.name}{statusbar.base_stat}</ListGroupItem>
                
            </ListGroup> */}
        </Card>
    )
}

export default PokemonCard