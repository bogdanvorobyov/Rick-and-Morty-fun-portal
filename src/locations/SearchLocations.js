import React from 'react'

const SearchLocations = (props) => {
    const searchHendler = (event) =>{ 
        console.log(event.target.value)
           props.currentPage(1)
           props.name(`name=${event.target.value}`)
           props.locations([])
           props.fetch(true)
    }
    
    const typeHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.type()
           props.locations([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.type(`type=${event.target.value}`)
            props.locations([])
            props.fetch(true)
        }
    }

    const dimensionHendler =(event)=>{ 
        if (event.target.value==='all'){ 
           props.currentPage(1)
           props.dimension()
           props.locations([])
           props.fetch(true)
        }
        else{
            props.currentPage(1)
            props.dimension(`dimension=${event.target.value}`)
            props.locations([])
            props.fetch(true)
        }
    }

   
    return (
        <div className='search-bar'> 
            <div><input type="text" placeholder='Search name...' onChange={searchHendler}/></div>
            <div><label htmlFor="type">Type: </label>
            <select name="type" id="type" defaultValue ='all' onChange={typeHendler}>
                <option value="all">All</option>
                <option value="Planet">Planet</option>
                <option value="Cluster">Cluster</option>
                <option value="Space station">Space station</option>
                <option value="Microverse">Microverse</option>
                <option value="TV">TV</option>
                <option value="Resort">Resort</option>
                <option value="Fantasy town">Fantasy town</option>
                <option value="Space station">Space station</option>
                <option value="Dimension">Dimension</option>
                <option value="unknown">unknown</option>
                <option value="Menagerie">Menagerie</option>
                <option value="Game">Game</option>
            </select></div>
            <div> <label htmlFor="dimension">Dimension: </label>
           <select name="dimension" id="dimension" defaultValue ='all' onChange={dimensionHendler}>
                <option value="all">All</option>
                <option value="Dimension C-137">Dimension C-137</option>
                <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                <option value="Replacement Dimension">Replacement Dimension</option>
                <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                <option value="Fantasy Dimension">Fantasy Dimension</option>
                <option value="Dimension 5-126">Dimension 5-126</option>
                <option value="Testicle Monster Dimension">Testicle Monster Dimension</option>
                <option value="Cromulon Dimension">Cromulon Dimension</option>
                <option value="Dimension C-500A">Dimension C-500A</option>
                <option value="Dimension K-83">Dimension K-83</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
           
        </div>
    )
}
export default SearchLocations