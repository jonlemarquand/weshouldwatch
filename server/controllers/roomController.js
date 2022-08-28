//js

//For Register Page
const createRoom = (req, res, next) => {
	res.status(201).json({
		status: "success",
		data: req.body,
	});
};

module.exports = {
	createRoom,
};
