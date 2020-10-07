import React from 'react';

import './Lobby.scss';



const Lobby = ({ startGame, roomPeople, refreshAction, userName, roomID, userState }) => {
  
    const StartGame = () => {
        if (userState === 'host') {
            return <button onClick={startGame}>Start</button>
        } else {
            return null;
        }
    }

    const ShowUserState = () => {
        if (userState === 'host') {
            return <p>You are the host. You have the power to start.</p>
        } else if (userState === 'join') {
            return <p>You are a joiner. Please wait to begin.</p>
        } else {
            return null;
        }
    }

    return (
        <div>
            <p>Lobby</p>
            <p>Hi { userName }!</p>
            <ShowUserState />
            <p>Your Room Code is:</p>
            <p>{ roomID }</p>
            <p>People in Lobby:</p>
            <ul>
                {roomPeople.map((person, i) => {
                    return <li key={i}>{person}</li>
                })}
            </ul>
            <button onClick={refreshAction}>Refresh List</button>
            <StartGame />
        </div>
    )
}

export default Lobby;