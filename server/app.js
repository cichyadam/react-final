const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

routes(app);

app.listen(config.port, () =>{
    console.log('app is running on port', config.port)
})

