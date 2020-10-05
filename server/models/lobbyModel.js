const redisClient = require('../models/redisModel');

let Lobby = () => null;

Lobby.getUserList = (peopleHash, rangeStart, rangeLength) => {
    return redisClient.lrange(peopleHash, rangeStart, rangeLength);
}

module.exports = Lobby;