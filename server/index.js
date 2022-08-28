const express = require("express");

const cors = require("cors");

const app = express();
const port = 3000;

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", require("./routes/room"));

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
