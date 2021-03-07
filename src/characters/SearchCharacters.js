import React from 'react'

const SearchCharacters = (props) => {

    const searchHendler = (event) =>{ 
        console.log(event.target.value)
           props.currentPage(1)
           props.name(`name=${event.target.value}`)
           props.characters([])
           props.fetch(true)
    }
    
    const statusHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.status()
           props.characters([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.status(`status=${event.target.value}`)
            props.characters([])
            props.fetch(true)
        }
    }

    const genderHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.gender()
           props.characters([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.gender(`gender=${event.target.value}`)
            props.characters([])
            props.fetch(true)
        }
    }

    const spechiesHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.spechies()
           props.characters([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.spechies(`species=${event.target.value}`)
            props.characters([])
            props.fetch(true)
        }
    }

    return (
        <div className='search-bar'> 
            <div><input type="text" placeholder='Search name...' onChange={searchHendler}/></div>
            <div><label htmlFor="status">Status: </label>
            <select name="status" id="status" defaultValue ='all' onChange={statusHendler}>
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select></div>
            <div> <label htmlFor="gender">Gender: </label>
           <select name="gender" id="gender" defaultValue ='all' onChange={genderHendler}>
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
                <option value="genderless">Genderless</option>
            </select>
            </div>
            <div> <label htmlFor="Spechies">Spechies: </label>
           <select name="Spechies" id="Spechies" defaultValue ='all' onChange={spechiesHendler}>
                <option value="all">All</option>
                <option value="human">Human</option>
                <option value="animal">Animal</option>
                <option value="alien">Alien</option>
                <option value="humanoid">Humanoid</option>
                <option value="robot">Robot</option>
                <option value="Mythological Creature">Mythological Creature</option>
                <option value="cronenberg">Cronenberg</option>
                <option value="disease">Disease</option>
                <option value="poopybutthole">Poopybutthole</option>
            </select>
            </div>
        </div>
    )
}

export default SearchCharacters