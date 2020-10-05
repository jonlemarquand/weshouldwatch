const asyncRedis = require("async-redis");
const redisClient = asyncRedis.createClient();

redisClient.on('connect', function() {
    console.log('redis connected');
});

module.exports = redisClient;