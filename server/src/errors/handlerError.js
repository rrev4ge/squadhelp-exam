const jsonLogger = require('../utils/jsonLogger');
const CONSTANTS = require('../constants');

module.exports = (err, req, res, next) => {
  console.log(err);

  if (err.message ===
    'new row for relation "Banks" violates check constraint "Banks_balance_ck"' ||
    err.message ===
    'new row for relation "Users" violates check constraint "Users_balance_ck"') {
    err.message = 'Not Enough money';
    err.code = 406;
  }
  if (!err.message || !err.code) {
    jsonLogger({
      message: 'Server Error',
      time: Date.now(),
      code: 500,
      stackTrace: {},
    }, CONSTANTS.LOG_FILES.DIR_PATH, CONSTANTS.LOG_FILES.ERRORS);
    res.status(500).send('Server Error');
  } else {
    jsonLogger({
      message: err.message,
      time: Date.now(),
      code: err.code,
      stackTrace: err.stack,
    }, CONSTANTS.LOG_FILES.DIR_PATH, CONSTANTS.LOG_FILES.ERRORS);
    res.status(err.code).send(err.message);
  }
};
