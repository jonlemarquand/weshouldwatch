import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import './Room.scss';

const Room = ({ userName, userState, roomPeople, setRoomPeople, roomID }) => {

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

    const StartGame = () => {
        if (userState === 'host') {
            return <button>Start</button>
        } else {
            return null;
        }
    }
    
    async function refreshUserList(e) {
        e.preventDefault();
        try { 
            const sendData = axios.get(`http://localhost:8000/api/refreshuser/?roomID=${roomID}`);
            const data = await sendData;
            console.log(data);
            setRoomPeople(data.data);
        } catch(error) {
          alert (error);
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
                        return <li key={i}>{person}</li>
                    })}
                </ul>
                <button onClick={refreshUserList}>Refresh List</button>
                <StartGame />
            </div>
        )
    }

}

export default Room;