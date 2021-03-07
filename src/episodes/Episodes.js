import React, {useEffect, useState} from 'react'
import axios from 'axios'
import EpisodesList from './EpisodesList'
import SearchEpisodes from './SearchEpisodes'


const Episodes = () => {

    const [episodes, setEpisodes] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [name, setName] = useState()
    const [season, setSeason] = useState()
    

        useEffect(()=>{
            if (fetching){
                
                axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}&${name}&${season}`)
                .then(response=>{
                    if(response.data.results){
                    setEpisodes([...episodes, ...response.data.results])
                            setCurrentPage(prevState=>prevState+1)
                    }
                })
                .catch((e)=>{
                    
                })
                .finally(()=>setFetching(false))
             }
        },[fetching])

    return (
        <div className='par-body par-character' >
            <SearchEpisodes name={setName} fetch={setFetching} currentPage={setCurrentPage} episodes={setEpisodes} season={setSeason} />
            <EpisodesList fetch={setFetching} episodes={episodes}/>
            
        </div>
    )
}

export default Episodes