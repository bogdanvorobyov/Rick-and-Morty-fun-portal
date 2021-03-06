import React, {useEffect, useState} from 'react'
import axios from 'axios'
import CharactersList from './CharactersList'
import SearchCharacters from './SearchCharacters'


const Characters = () => {

    const [characters, setCharacters] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [name, setName] = useState()
    const [status, setStatus] = useState()
    const [gender, setGender] = useState()
    const [spechies, setSpechies] = useState()

        useEffect(()=>{
            if (fetching){
                
                axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}&${name}&${status}&${gender}&${spechies}`)
                .then(response=>{
                    if(response.data.results){
                    setCharacters([...characters, ...response.data.results])
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
            <SearchCharacters name={setName} fetch={setFetching} currentPage={setCurrentPage} characters={setCharacters} status={setStatus} gender={setGender} spechies={setSpechies}/>
            <CharactersList fetch={setFetching} characters={characters}/>
            
        </div>
    )
}

export default Characters