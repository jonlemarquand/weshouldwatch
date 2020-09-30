import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Join.scss';

const Join = ({ hostName, setHostName }) => {

    const [roomRedirect, setRoomRedirect] = useState(false);
    const [roomID, setRoomID] = useState(null);
    const [roomMatch, setRoomMatch] = useState(false);

    const handleInputChange = e => {
        if (e.target.name === "hostName") {
            setHostName(e.target.value)
        } else if (e.target.name === "roomCode") {
            setRoomID(e.target.value)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try { 
            const sendData = axios.post('http://localhost:8000/api/joinroom', { hostName, roomID });
            const data = await sendData;
            console.log(data.data);
        } catch(error) {
          alert (error);
        }
      }
    /*
    useEffect(() => {
        if (roomID) {
            setRoomRedirect(true);
        }
    }, [roomID])
    */
    const GoToRoom = () => {
        if(roomRedirect) {
            return <Redirect to={`/room/${roomID}`} />
        }
        return null;
    }

    return (
        <div>
            <p>Hi there!</p>
            <p>Please enter your name and the room code you're trying to join:</p>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label for="hostName">Name:</label>
                    <input type="text" name="hostName" id="hostName" placeholder="Enter name here" onChange={ handleInputChange } />
                </div>
                <div>
                    <label for="roomCode">Room Code:</label>
                    <input type="text" name="roomCode" id="roomCode" placeholder="Enter room code" onChange={ handleInputChange } />
                </div>
                <input type="submit" value="Start" />
            </form>
            <GoToRoom />
        </div>
    )
}

export default Join;