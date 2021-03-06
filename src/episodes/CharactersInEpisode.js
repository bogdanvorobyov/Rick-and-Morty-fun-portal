import React, {useEffect, useState} from 'react'
import axios from 'axios'


const CharactersInEpisode = (props) => {

    const[allCharacters, setallCharacters]=useState([])

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${props.characters.map(character=>character.split('/')[5])}`)
                             .then(response=>{
                                 setallCharacters(<div className='characters-in-episode'>{response.data.map(character=><div><img src={character.image} alt=""/><div>{character.name}</div></div>)}</div>)  
                              })
    },[])

   
    return (
        <div>Characters in episode: {allCharacters}</div>       
    )
}

export default CharactersInEpisode