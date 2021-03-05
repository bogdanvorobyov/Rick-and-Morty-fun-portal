import React, {useEffect} from 'react'

const CharactersList = (props) => {
    
    useEffect(()=>{
        document.addEventListener('scroll', showMore)
        return function(){ 
        document.removeEventListener('scroll', showMore)
        }
    }, [])


    const showMore =(e)=> { 
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop+window.innerHeight)<40){
            console.log('scroll')
            props.fetch(true)
        }
    }

    return (
        <div>
              {props.characters.map(item=>
                    <div key={item.id} className='character'>
                        <div><img src={item.image} alt={item.name}/></div>
                        <div className='chararcter-info'>
                        <div>Name: {item.name}</div>
                        <div>Spechies: {item.species}</div>
                        <div>Origin: {item.origin.name}</div>
                        <div>Gender: {item.gender}</div>
                        <div>Status: {item.status}</div>
                        <div>Location: <a className='char-link' href={item.location.url}>{item.location.name}</a></div>
                        <div>Episodes: {item.episode.map(episode=><a  className='char-link' key={episode}href={episode}>{episode.split('/')[5]+' '}</a>)}</div> 
                        </div> 
                    </div>
)}   
        </div>
    )
}

export default CharactersList