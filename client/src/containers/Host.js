import React from 'react';

import './Host.scss';

const Host = () => {
    // Name, streaming services, give us ideas or anonymous chosoe / tv/film
    return (
        <div>
            <h1>Host</h1>
            <form>
                <div>
                    <label for="hostName">Name:</label>
                    <input type="text" name="name" id="hostName" placeholder="Enter name here" />
                </div>
                <div>
                    <p>Series or Film?</p>
                    <div>
                        <input type="radio" id="tv" name="medium" value="tv" checked />
                        <label for="tv">TV Series</label>
                    </div>
                    <div>
                        <input type="radio" id="film" name="medium" value="film" checked />
                        <label for="film">Film</label>
                    </div>
                </div>
                <div>
                    <p>Which streaming service?</p>
                    <div>
                        <input type="checkbox" id="allfour" name="streaming" value="allfour" />
                        <label for="allfour">All4</label>
                    </div>
                    <div>
                        <input type="checkbox" id="amazon" name="streaming" value="amazon" />
                        <label for="amazon">Amazon Prime</label>
                    </div>
                    <div>
                        <input type="checkbox" id="iplayer" name="streaming" value="iplayer" />
                        <label for="iplayer">BBC IPlayer</label>
                    </div>
                    <div>
                        <input type="checkbox" id="britbox" name="streaming" value="britbox" />
                        <label for="britbox">Britbox</label>
                    </div>
                    <div>
                        <input type="checkbox" id="disney" name="streaming" value="disney" />
                        <label for="disney">Disney+</label>
                    </div>
                    <div>
                        <input type="checkbox" id="itv" name="streaming" value="itv" />
                        <label for="itv">ITV Player</label>
                    </div>
                    <div>
                        <input type="checkbox" id="netflix" name="streaming" value="netflix" />
                        <label for="netflix">Netflix</label>
                    </div>
                    <div>
                        <input type="checkbox" id="nowtv" name="streaming" value="nowtv" />
                        <label for="nowtv">NowTV</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="narrow" name="choiceOptions" value="narrow" checked />
                        <label for="narrow">Narrow Down</label>
                    </div>
                    <div>
                        <input type="radio" id="surprise" name="choiceOptions" value="surprise" checked />
                        <label for="surprise">Surprise Us</label>
                    </div>
                </div>
                <input type="submit" value="Start" />
            </form>
        </div>
    )
}

export default Host;