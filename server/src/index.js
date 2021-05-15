require('./dbMongo/mongoose');
const http = require('http');
const { exec } = require('child_process');

const app = require('./app');
const controller = require('./socketInit');
const CONSTANTS = require('./constants');

const PORT = process.env.PORT || CONSTANTS.DEVELOPMENT_PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${ PORT }!`);
});

exec('node src/utils/errorCronStart.js', (error, stdout, stderr)=>{console.log(`Error: ${error}\nstdout: ${stdout}\nstdout: ${stderr}`);});

controller.createConnection(server);
