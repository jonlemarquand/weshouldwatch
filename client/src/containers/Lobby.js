import React from 'react';

import './Lobby.scss';

const Lobby = () => {
    return (
        <div>
            <p>Hi Name!</p>
            <p>Your Room Code is:</p>
            <p>456XCD</p>
            <p>People in Lobby:</p>
            <ul>
                <li>James</li>
                <li>Irene</li>
                <li>Lester</li>
                <li>Moe</li>
            </ul>
            <button>Start</button>

        </div>
    )
}

export default Lobby;