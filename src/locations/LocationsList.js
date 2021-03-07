import React, {useEffect} from 'react'
import CharactersInEpisode from '../episodes/CharactersInEpisode'

const LocationsList = (props) => {
    

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
              {props.locations.map(item=>
                    <div key={item.id} className='location-par'>
                        <div className='location'>
                            <div>Name: {item.name}</div>
                            <div>Type: {item.type}</div>
                            <div>Dimension: {item.dimension}</div>
                        </div>
                        <CharactersInEpisode characters={item.residents} title='Residents in location'/>
                    </div>
)}   
        </div>
    )
}

export default LocationsList
