import { NextApiRequest, NextApiResponse} from 'next'
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'

const AllPokemonsters = async(request: NextApiRequest, response: NextApiResponse) =>{
    let dataApi = [];
    let errorApi = null;
    //let params: PokemonTCG.IQuery[] = [{ name: 'name', value: 'Charizard' }];
    
    await PokemonTCG.Card.all()//where(params)
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

export default AllPokemonsters