import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

export const Home = () => {
    let [pokeList, setPokeList] = useState([]);

    useEffect(() => {
        window
        .fetch('/api/pokemon')
        .then((response) => response.json())
        .then(({ data, length }) => {
            setPokeList(data)
            console.log(data);
        })
    }, [])

    return (
        <div>
            <Navbar/>
            <div>Pokedex</div>
            { pokeList.map( (pokemon)  => (
                <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.imageUrl} />
                </div>
            ))}
        </div>
    );
};

export default Home