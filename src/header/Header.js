import React from 'react'
import {Link} from 'react-router-dom'



const Header = () => {
    return (
        <div className='navigation'>
            <nav className='navbar'>
                <div className="nav-item"><Link to='/'>Home</Link></div>
                <div className="nav-item"><Link to='/characters'>Characters</Link></div>
                <div className="nav-item"><Link to='/episodes'>Episodes</Link></div>
                <div className="nav-item"><Link to='/locations'>Locations</Link></div>
            </nav>
        </div>
    )
}

export default Header