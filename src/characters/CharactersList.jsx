import React, {useEffect} from 'react'
import EpisodesInCharacters from './EpisodesInCharacters'


const CharactersList = (props) => {
    
    useEffect(()=>{
        document.addEventListener('scroll', showMore)
        return function(){ 
        document.removeEventListener('scroll', showMore)
        }
    }, [])


    const showMore =(e)=> { 
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight)<40){
            props.fetch(true)
        }
    }

    return (
        <div className='characters-par'>
              {props.characters.map(item=>
                    <div key={item.id} className='character'>
                        <div><img src={item.image} alt={item.name}/>
                        <div><b>{item.name}</b></div>
                        <div>Status: {item.status}</div>
                        
                        </div>
                        <div>
                            <h4>Info:</h4>
                            <div>Origin: {item.origin.name}</div>
                            <div>Gender: {item.gender}</div>
                            <div>Spechies: {item.species}</div>
                            <div>Location: {item.location.name}</div>
                        </div>
                        <EpisodesInCharacters episodes={item.episode}/>
                    </div>
)}   
        </div>
    )
}

export default CharactersList