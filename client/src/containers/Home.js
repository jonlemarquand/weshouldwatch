import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
    return (
        <div class="home">
            <h1>We Should Watch</h1>
            <ul>
               <li><Link to="/host">Host</Link></li>
               <li><Link to="/join">Join</Link></li>
            </ul>
        </div>
    )
}

export default Home;