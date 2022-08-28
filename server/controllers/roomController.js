let Room = require("../models/room.js");

const createRoom = (req, res, next) => {
	// check for type/name
	if (
		req.body.name &&
		(req.body.type === "series" || req.body.type === "film")
	) {
		// create room
		const room = new Room(req.body.type, req.body.name);
		// generate code for room
		room.generateRoomCode();
		// return room code and users
		res.status(201).json({
			status: "success",
			data: {
				type: room.type,
				people: room.people,
				code: room.code,
			},
		});
	} else {
		res.status(400).json({
			status: "failure",
			data: "Information not provided correctly.",
		});
	}
};

module.exports = {
	createRoom,
};
