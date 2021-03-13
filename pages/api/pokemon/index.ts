import { IncomingMessage, ServerResponse } from "node:http";
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

const AllPokemonsters = async(request: IncomingMessage, response: ServerResponse) =>{
    let params: PokemonTCG.IQuery[] = [{ name: 'name', value: 'Charizard' }];
    PokemonTCG.Card.where(params)
    .then(cards => {
        response.end(JSON.stringify({data: cards, error: null}));
    })
    .catch(error => {
        response.end(JSON.stringify({data: null, error: error}));
    });
}

export default AllPokemonsters