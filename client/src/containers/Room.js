import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './Room.scss';

const Room = ({ userName, userState, roomPeople }) => {

    const [roomStatus, setRoomStatus] = useState('lobby');
    let { id } = useParams();

    const ShowUserState = () => {
        if (userState === 'host') {
            return <p>You are the host. You have the power to start.</p>
        } else if (userState === 'join') {
            return <p>You are a joiner. Please wait to begin.</p>
        } else {
            return null;
        }
    }

    if (roomStatus === 'lobby') {
        return (
            <div>
                <p>Lobby</p>
                <p>Hi { userName }!</p>
                <ShowUserState />
                <p>Your Room Code is:</p>
                <p>{ id }</p>
                <p>People in Lobby:</p>
                <ul>
                    {roomPeople.map((person, i) => {
                        return <li key={1}>{person}</li>
                    })}
                </ul>
                <button>Start</button>
            </div>
        )
    }

}

export default Room;