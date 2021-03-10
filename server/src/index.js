require('./dbMongo/mongoose');
const http = require('http');
const controller = require('./socketInit');

const PORT = process.env.PORT || 9632;

const server = http.createServer();

server.listen(PORT, () => console.log(`Example app listening on port ${ PORT }!`));

controller.createConnection(server);


