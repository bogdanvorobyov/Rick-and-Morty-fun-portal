import React, {useEffect, useState} from 'react'
// import axios from 'axios'
import CharactersInEpisode from './CharactersInEpisode'

const EpisodesList = (props) => {
    

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
        <div>
              {props.episodes.map(item=>
                    <div key={item.id} className='character'>
                        <div className='chararcter-info'>
                        <div>Name: {item.name}</div>
                        <div>Air date: {item.air_date}</div>
                        <div>Episode: {item.episode}</div>
                        <CharactersInEpisode characters={item.characters}/>
                        </div> 
                    </div>
)}   
        </div>
    )
}

export default EpisodesList
