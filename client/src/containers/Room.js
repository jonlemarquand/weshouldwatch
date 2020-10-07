import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Lobby from './Lobby';
import RoomActive from './RoomActive';

import './Room.scss';

const Room = ({ userName, userState, roomPeople, setRoomPeople, roomID }) => {

    const [roomStatus, setRoomStatus] = useState('lobby');
    let { id } = useParams();
    
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

    async function getProgrammes(e) {
        e.preventDefault();
        try {
            const newProgrammes = axios.get(`http://localhost:8000/api/programmes`);
            const programmeList = await newProgrammes;
            console.log(programmeList.data);
        } catch(error) {
            alert (error);
        }
    }

    if (roomStatus === 'lobby') {
        return (
            <Lobby 
                userName={userName}
                userState={userState}
                roomPeople={roomPeople}
                refreshAction={refreshUserList}
                roomID={roomID}
                startGame={getProgrammes}
            />
        )
    } else if (roomStatus === 'active') {
        return (
            <RoomActive 

            />
        )
    } else return null;

}

export default Room;