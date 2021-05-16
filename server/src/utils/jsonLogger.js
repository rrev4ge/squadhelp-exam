const fs = require('fs');

const pathGenerator = require('./pathGenerator');
const fileStats = require('./fileStats');

const jsonLogger = async (msg, dirPath, fileName) => {
  try {
    const filePath = await pathGenerator(dirPath, fileName);
    const stats = await fileStats(filePath);
    const start = stats.code === 'ENOENT' || stats.size === 0 ? 0 : stats.size - 1;
    const msgString = JSON.stringify(msg, null, 4);
    const json = start === 0 ? `[${msgString}]` : `,${msgString}]`;
    if (stats.code === 'ENOENT') {
      fs.writeFile(filePath, json, (err) => {
        if (err) throw err;
      });
    }
    const stream = fs.createWriteStream(filePath, { flags: 'r+', start });
    stream.on('open', function(fd) {
      stream.write(json);
      stream.end();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = jsonLogger;

