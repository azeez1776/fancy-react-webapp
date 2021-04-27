import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <div className="nav_op">
                <button>Discover</button>
                <button ><Link style={{ textDecoration: 'none', color: 'black' }} to="/Form">Join</Link></button>
            </div>
            <div className="nav_im">
                <Link to="/"> <img src={process.env.PUBLIC_URL + 'muffin.png'} className="logo" alt="logo" /></Link>
            </div>
        </div>
    )
}

export default Nav
