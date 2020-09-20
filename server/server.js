const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
}

app.post('/api/newroom', cors(corsOptions), (req, res, next) => {
    console.log(req.body);
    //Receive Data
    //Format Data
    //Generate Room Code
    //Add results to database
    //Send user to room
    res.status(200).json(req.body)
});

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});