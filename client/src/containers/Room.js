import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './Room.scss';

const Room = ({ hostName }) => {

    const [roomStatus, setRoomStatus] = useState('lobby');
    let { id } = useParams();

    if (roomStatus === 'lobby') {
        return (
            <div>
                <p>Lobby</p>
                <p>Hi { hostName }!</p>
                <p>Your Room Code is:</p>
                <p>{ id }</p>
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

}

export default Room;