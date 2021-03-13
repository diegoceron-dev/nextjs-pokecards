import { NextApiRequest, NextApiResponse} from 'next'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

const FindPokemonster = async(request: NextApiRequest, response: NextApiResponse) =>{
    const pokeid = request.query.pokeid.toString();
    let dataApi = {};
    let errorApi = null;

    await PokemonTCG.Card.find(pokeid)
    .then(cards => {
        dataApi = cards;
        response.statusCode = 200;
    })
    .catch(error => {
        errorApi = error;
        response.statusCode = 500;
    });
    
    response.end(JSON.stringify({data: dataApi, error: errorApi}));
}

export default FindPokemonster