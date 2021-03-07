import React, {useEffect, useState} from 'react'
import axios from 'axios'


const CharactersInEpisode = (props) => {

    const[allCharacters, setallCharacters]=useState([])

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/${props.characters.map(character=>character.split('/')[5])}`)
                             .then(response=>{
                                 if (Array.isArray(response.data)){
                                 setallCharacters(<div className='characters-in-episode'>{response.data.map(character=><div key={character.id}><img src={character.image} alt=""/><div>{character.name}</div></div>)}</div>)  
                                 }
                                 else {
                                 setallCharacters(<div className='characters-in-episode'><div><img src={response.data.image} alt=""/><div>{response.data.name}</div></div></div>)  
                                 }
                            })
                              .catch((e)=>{
                                  console.log(e)
                              })
    },[])

   
    return (
        <div>{props.title}: {allCharacters}</div>       
    )
}

export default CharactersInEpisode