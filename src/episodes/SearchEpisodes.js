import React from 'react'

const SearchEpisodes = (props) => {

    const searchHendler = (event) =>{ 
        console.log(event.target.value)
           props.currentPage(1)
           props.name(`name=${event.target.value}`)
           props.episodes([])
           props.fetch(true)
    }

    const seasonHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.season()
           props.episodes([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.season(`episode=${event.target.value}`)
            props.episodes([])
            props.fetch(true)
        }
    }
    
    return (
        <div className='search-bar'> 
            <div><input type="text" placeholder='Search name...' onChange={searchHendler}/></div>
            <div><label htmlFor="Season">Season: </label>
            <select name="Season" id="Season" defaultValue ='all' onChange={seasonHendler}>
                <option value="all">All</option>
                <option value="S01">Season 1</option>
                <option value="S02">Season 2</option>
                <option value="S03">Season 3</option>
                <option value="S04">Season 4</option>
            </select></div>
        </div>
    )
}

export default SearchEpisodes