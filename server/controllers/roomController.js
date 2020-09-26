exports.newRoom = (req, res, next) => {
    
    //Receive Data
    
    console.log(req.body);
    let hostName = req.body.hostName;
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

    //Send user to room
    res.status(200).json(respondToClient)
};