import React from 'react';
import './Body.css';
import { Link } from 'react-router-dom';

function Body() {


    return (
        <div className="body">
            <div className="body_info">
                <p className="pp">MOUTH WATERING CAKES</p>
                <p className="pp1">Explore variety of cakes</p>
                <img class="bodyimg" src={process.env.PUBLIC_URL + 'cupcake.png'} alt="cake" />
                <button className="body_but"><Link style={{ textDecoration: 'none', color: 'white' }} to="./Form">Join now</Link></button>
            </div>
        </div>
    )
}

export default Body
