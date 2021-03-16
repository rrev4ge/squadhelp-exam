require('./dbMongo/mongoose');
const http = require('http');
const app = require('./app');
const controller = require('./socketInit');
const CONSTANTS = require('./constants');

const PORT = process.env.PORT || CONSTANTS.DEVELOPMENT_PORT;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));

controller.createConnection(server);
