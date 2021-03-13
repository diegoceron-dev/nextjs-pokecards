import { NextApiRequest, NextApiResponse} from 'next'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

const FindPokemonster = async(request: NextApiRequest, response: NextApiResponse) =>{
    const poke = request.query.poke.toString();
    let params: PokemonTCG.IQuery[] = [{ name: 'name', value: poke }];
    let dataApi = [];
    let errorApi = null;

    await PokemonTCG.Card.find(poke)
    .then(cards => {
        dataApi.push(cards);
        response.statusCode = 200;
    })
    .catch(error => {
        errorApi = error;
        response.statusCode = 500;
    });

    await PokemonTCG.Card.where(params)
    .then(cards => {
        dataApi.push(cards);
        response.statusCode = 200;
    })
    .catch(error => {
        errorApi = error;
        response.statusCode = 500;
    });
    
    response.end(JSON.stringify({data: dataApi, error: errorApi}));
}

export default FindPokemonster