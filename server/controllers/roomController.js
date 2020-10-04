const asyncRedis = require("async-redis");
const redisClient = asyncRedis.createClient();

redisClient.on('connect', function() {
    console.log('redis connected');
});

exports.newRoom = (req, res, next) => {
    
    //Receive Data
    
    console.log(req.body);
    let hostName = req.body.userName;
    let medium = req.body.medium;
    let choiceOptions = req.body.choiceOptions;
    let streaming = req.body.streaming;
    
     //Generate Room Code
     let roomCode = (
        Math.random()
            .toString(36)
            .substring(2, 5) + Math.random()
            .toString(36)
            .substring(2, 5)
    ).toUpperCase();
    console.log(roomCode);

    //Format Data
    
    let respondToClient = {
        "hostName": hostName,
        "roomID": roomCode
    }
   
    //Add results to database
    const addHostToDatabase = () => {
        redisClient.set(roomCode, roomCode);
        redisClient.set(`${roomCode}-host`, hostName);
        redisClient.rpush(`${roomCode}-people`, hostName);
        redisClient.rpush(`${roomCode}-streaming`, streaming);
        redisClient.set(`${roomCode}-medium`, medium);
        redisClient.set(`${roomCode}-choice`, choiceOptions);
    }
    addHostToDatabase();

    //Send user to room
    res.status(200).json(respondToClient)
};

exports.joinRoom = (req, res, next) => {

    // 1. Receive Data
    console.log(req.body);
    let roomID = req.body.roomID;
    let guestName = req.body.hostName;

    // 2. Check if valid
        
    const asyncCheckRoomID = async () => {
        const doesItMatch =  await redisClient.exists(roomID);
        if (!doesItMatch) {
            res.status(404).json("Invalid Room ID")
        } else {
            return true;
        }
    };
    
    

    // 3. Add data to redis if valid
    const asyncPeopleList = async () => {
        doesItExist = await asyncCheckRoomID();
        if (!doesItExist) return null;
        await redisClient.rpush(`${roomID}-people`, guestName);
        const userList = await redisClient.lrange(`${roomID}-people`, 0, -1);
        
        // 4. Return Info
        let returnResponse = {
            "roomID": roomID,
            "returnPeople": userList
        };
        res.status(200).json(returnResponse)
    }

    asyncPeopleList();

}