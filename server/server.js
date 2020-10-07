const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const redis = require('redis');

const hostRouter = require('./routes/hostRoutes');
const programmeRouter = require('./routes/programmeRoutes');

//setup Redis:
const redisClient = redis.createClient({host: '127.0.0.1'});

//Start Express App
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(cors());

const corsOptions = {
    origin: 'http://localhost:3000',
}

// Users
app.post('/api/newroom', hostRouter);
app.post('/api/joinroom', hostRouter);
app.get('/api/refreshuser', hostRouter);

app.get('/api/programmes', programmeRouter);

const port = 8000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});