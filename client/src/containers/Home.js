import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';
import logo from '../assets/logo.png';

const Home = () => {
    return (
        <div class="home">
            <img class="logo-lrg" src={logo} alt="We Should Watch Logo" />
            <ul>
               <li><Link to="/host">Host</Link></li>
               <li><Link to="/join">Join</Link></li>
            </ul>
        </div>
    )
}

export default Home;