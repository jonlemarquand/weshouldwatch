class Room {
	constructor(type, person) {
		this.type = type;
		this.people = [person];
	}

	generateRoomCode() {
		const length = 6;
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		const charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		this.code = result;
	}
}

module.exports = Room;
