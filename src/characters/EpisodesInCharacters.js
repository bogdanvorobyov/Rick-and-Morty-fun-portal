import React, {useEffect, useState} from 'react'
import axios from 'axios'

const EpisodesInCharacters = (props) => {
    const[allEpisodes, setallEpisodes]=useState([])
    const[allEpisodesStyle, setallEpisodesStyle]=useState('hidden-overflow')

    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/episode/${props.episodes.map(episode=>episode.split('/')[5])}`)
                             .then(response=>{
                                 if (Array.isArray(response.data)){
                                 setallEpisodes(<div className={allEpisodesStyle + ' episodes-in-characters'}>{response.data.map(episode=><div key={episode.id}>{episode.name}</div>)}</div>)  
                                 }
                                 else {
                                    setallEpisodes(<div className='episodes-in-characters'>{response.data.name}</div>)  
                                 }
                            })
                              .catch((e)=>{
                                  console.log(e)
                              })
    },[allEpisodesStyle])

   const showMoreEpisodes = (e)=>{
       console.log(e)
       if(allEpisodesStyle === ''){
            setallEpisodesStyle('hidden-overflow') 
       }
       else{ 
            setallEpisodesStyle('')
       }
   }


    return (
        <div> 
            <div><h4>In episodes:</h4> {allEpisodes}</div>
            <h4 className='show-more-episodes' onClick={showMoreEpisodes}>Show more</h4>
        </div>       
    )
}

export default EpisodesInCharacters