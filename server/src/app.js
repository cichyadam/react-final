const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
const helmet = require('helmet');

const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({
    type: 'application/json',
}));
app.use(cors());
app.use(helmet());

require('./routes')(app);

io.on('connection', socket => {
    console.log('\x1b[32m', 'Socket joined', socket.id, '\x1b[0m');

    socket.on('I need help', data => {
        io.emit('user said', { message: escape(data.message) });
    });

    socket.on('disconnect', () => {
        console.log('\x1b[31m', 'Socket left', socket.id, '\x1b[0m');
    });
});

sequelize.sync()
    .then(() => {
        server.listen(config.port,  (error) => {
            if (error) {
                console.log('\x1b[31m', error, '\x1b[0m');
            }
            console.log('\x1b[32m', 'Server is running on Port:', config.port, '\x1b[0m');
        });
    });

