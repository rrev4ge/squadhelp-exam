const fs = require('fs');
const JSONStream = require('JSONStream');
const es = require('event-stream');
const moment = require('moment');

const pathGenerator = require('./pathGenerator');
const fileStats = require('./fileStats');

const dailyLogger = async(filePatch, fileName, date = moment().format('D-M-Y-HH-mm-ss')) => {
  const dailyFilePath = await pathGenerator(filePatch, fileName, date);
  const logFilePath = await pathGenerator(filePatch, fileName);
  const copyLogFilePath = await pathGenerator(filePatch, `${moment().format('D-M-Y-HH-mm-ss')}_copy_${fileName}`);

  const fileReadStream = fs.createReadStream(logFilePath);
  const fileWriteStream = fs.createWriteStream(dailyFilePath);

  let index = 0;
  const  transformer = (data) => {
    const location = {
      message: data.message,
      code: data.code,
      time: data.time,
    };
    let result = JSON.stringify(location, null, 4) + ',';
    if (index === 0) {
      result = '[' + result;
    }
    index++;
    fileWriteStream.write(result);
  };

  const end = () => {
    fileWriteStream.close();
    const finish = ']';
    const stats = fileStats(dailyFilePath);
    const start = stats.size - 1;
    const stream = fs.createWriteStream(dailyFilePath, { flags: 'r+', start });
    stream.on('open', function(fd) {
      stream.write(finish);
      stream.end();
    });
    const reset = fs.createWriteStream(logFilePath);
    reset.on('open', function(fd) {
      reset.write('');
      reset.end();
    });
    console.log(`${index} objects are written to file`);
  };

  await fileReadStream
    .pipe(JSONStream.parse('*'))
    .pipe(es.through(transformer, end));

};


module.exports = dailyLogger;
