import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './Host.scss';

const Host = ({ hostName, medium, choiceOptions, streaming, setHostName, setMedium, setChoiceOptions, setStreaming }) => {

    const [roomRedirect, setRoomRedirect] = useState(false);
    const [roomID, setRoomID] = useState(null);

    const handleInputChange = e => {
        if (e.target.name === "hostName") {
            setHostName(e.target.value)
        } else if (e.target.name === "medium") {
            setMedium(e.target.value)
        } else if (e.target.name === "streaming") {
            if(!streaming.includes(e.target.value)) {
                setStreaming([...streaming, e.target.value])
            } else if(streaming.includes(e.target.value)) {
                let newArray = streaming.filter( option => {
                    return option !== e.target.value
                })
                setStreaming(newArray)
            }
        } else if (e.target.name === "choiceOptions") {
            setChoiceOptions(e.target.value)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try { 
            const sendData = axios.post('http://localhost:8000/api/newroom', { hostName, medium, choiceOptions, streaming });
            const data = await sendData;
            setRoomID(data.data.roomID);
        } catch(error) {
          alert (error);
        }
      }

    useEffect(() => {
        if (roomID) {
            setRoomRedirect(true);
        }
    }, [roomID])

    const GoToRoom = () => {
        if(roomRedirect) {
            return <Redirect to={`/room/${roomID}`} />
        }
        return null;
    }

    // Name, streaming services, give us ideas or anonymous chosoe / tv/film
    return (
        <div>
            <h1>Host</h1>
            <form onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="hostName">Name:</label>
                    <input type="text" name="hostName" id="hostName" placeholder="Enter name here" onChange={ handleInputChange }/>
                </div>
                <div>
                    <p>Series or Film?</p>
                    <div>
                        <input type="radio" id="tv" name="medium" value="tv" onChange={ handleInputChange } checked />
                        <label htmlFor="tv">TV Series</label>
                    </div>
                    <div>
                        <input type="radio" id="film" name="medium" value="film" onChange={ handleInputChange }/>
                        <label htmlFor="film">Film</label>
                    </div>
                </div>
                <div>
                    <p>Which streaming service?</p>
                    <div>
                        <input type="checkbox" id="allfour" name="streaming" value="allfour" onChange={ handleInputChange } />
                        <label htmlFor="allfour">All4</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amazon" name="streaming" value="amazon" onChange={ handleInputChange }/>
                        <label htmlFor="amazon">Amazon Prime</label>
                    </div>
                    <div>
                        <input type="checkbox" id="iplayer" name="streaming" value="iplayer" onChange={ handleInputChange }/>
                        <label htmlFor="iplayer">BBC IPlayer</label>
                    </div>
                    <div>
                        <input type="checkbox" id="britbox" name="streaming" value="britbox" onChange={ handleInputChange }/>
                        <label htmlFor="britbox">Britbox</label>
                    </div>
                    <div>
                        <input type="checkbox" id="disney" name="streaming" value="disney" onChange={ handleInputChange }/>
                        <label htmlFor="disney">Disney+</label>
                    </div>
                    <div>
                        <input type="checkbox" id="itv" name="streaming" value="itv" onChange={ handleInputChange }/>
                        <label htmlFor="itv">ITV Player</label>
                    </div>
                    <div>
                        <input type="checkbox" id="netflix" name="streaming" value="netflix" onChange={ handleInputChange }/>
                        <label htmlFor="netflix">Netflix</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nowtv" name="streaming" value="nowtv" onChange={ handleInputChange }/>
                        <label htmlFor="nowtv">NowTV</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="narrow" name="choiceOptions" value="narrow" onChange={ handleInputChange } checked />
                        <label htmlFor="narrow">Narrow Down</label>
                    </div>
                    <div>
                        <input type="radio" id="surprise" name="choiceOptions" value="surprise" onChange={ handleInputChange }/>
                        <label htmlFor="surprise">Surprise Us</label>
                    </div>
                </div>
                <input type="submit" value="Start" />
            </form>
            <GoToRoom />
        </div>
    )
}

export default Host;