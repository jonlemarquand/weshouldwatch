import React from 'react';

import './Join.scss';

const Join = () => {
    return (
        <div>
            <p>Hi there!</p>
            <p>Please enter your name and the room code you're trying to join:</p>
            <form>
                <div>
                    <label for="hostName">Name:</label>
                    <input type="text" name="name" id="hostName" placeholder="Enter name here" />
                </div>
                <div>
                    <label for="roomCode">Room Code:</label>
                    <input type="text" name="room" id="roomCode" placeholder="Enter room code" />
                </div>
            </form>
        </div>
    )
}

export default Join;