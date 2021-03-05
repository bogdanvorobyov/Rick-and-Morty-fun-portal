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
           props.status()
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

    return (
        <div className='search-bar'> 
            <input type="text" placeholder='search' onChange={searchHendler}/>
            <label htmlFor="status">Status</label>
            <select name="status" id="status" defaultValue ='all' onChange={statusHendler}>
                <option value="all">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender" defaultValue ='all' onChange={genderHendler}>
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    )
}

export default SearchCharacters