import React, {useState, useEffect} from "react";
import { ColorRing } from  'react-loader-spinner';
import { shouldProcessLinkClick } from "react-router-dom/dist/dom";

const LoadingIndicator = () => {
    return (
        <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
    )
}
 interface Pokedex {
    results:  Pokemon[];
}


interface Pokemon {
    name: string;
    url:  string;
}

interface PokedexProps {
    limit: number
}



const Pokedex = ({limit = 151} : PokedexProps) => {
    const [pokemon,setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState("");

    const loadPokemon = async(limit : number) => {
        setLoading(true);
        let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=" + limit);
        let pokedex : Pokedex = await response.json();

        setPokemon(pokedex.results);
        setLoading(false)
    }

    useEffect(() =>{
        loadPokemon(limit);
    },[limit])


    return (
       <>
       <div>
       {loading && <LoadingIndicator/>}
        <input type="text" onChange={(e) => setFilter(e.target.value)} value={filter}/>
        
           {
           pokemon.filter((p) => p.name.toUpperCase().startsWith(filter)).map((pokemon) => {
            return <p> {pokemon.name}<br/></p>
           })
           }
      
       </div>
       </>
    )
}

const Pokemon = () => {
    const [limit,setLimit] = useState(5);
    const [selectedLimit, setSelectedLimit] = useState(5);
    return (
        <div>
            <h1>Project 4 : Pokedex</h1>
             <Pokedex limit={selectedLimit}/>
            <input type="number" onChange={(e) => setLimit(Number(e.target.value))} value={limit}/>
            <button onClick={() =>{
                setSelectedLimit(limit);
            }}>Set Limit</button>
        </div>
    );
};

export default Pokemon;
