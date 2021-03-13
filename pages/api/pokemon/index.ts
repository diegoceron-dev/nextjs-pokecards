import { IncomingMessage, ServerResponse } from "node:http";

const AllPoke = async(request: IncomingMessage, response: ServerResponse) =>{
   response.end(JSON.stringify({message: 'hello'}));
}

export default AllPoke