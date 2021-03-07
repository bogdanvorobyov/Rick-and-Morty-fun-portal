import React, {useEffect, useState} from 'react'
import axios from 'axios'
import LocationsList from './LocationsList'
import SearchLocations from './SearchLocations'

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [name, setName] = useState()
    const [type, setType] = useState()
    const [dimension, setDimension] = useState()
    

        useEffect(()=>{
            if (fetching){
                
                axios.get(`https://rickandmortyapi.com/api/location?page=${currentPage}&${name}&${type}&${dimension}`)
                .then(response=>{
                    if(response.data.results){
                    setLocations([...locations, ...response.data.results])
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
            <SearchLocations name={setName} fetch={setFetching} currentPage={setCurrentPage} locations={setLocations} type={setType} dimension={setDimension}/>
            <LocationsList fetch={setFetching} locations={locations}/>
            
        </div>
    )
}

export default Locations