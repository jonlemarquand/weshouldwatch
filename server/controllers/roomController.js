exports.newRoom = (req, res, next) => {
    console.log(req.body);
    //Receive Data
    //Format Data
    //Generate Room Code
    let roomCode = (
        Math.random()
            .toString(36)
            .substring(2, 5) + Math.random()
            .toString(36)
            .substring(2, 5)
    ).toUpperCase();
    console.log(roomCode);
    //Add results to database

    //Send user to room
    res.status(200).json(req.body)
};