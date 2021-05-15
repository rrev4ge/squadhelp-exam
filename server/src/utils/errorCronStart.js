const CONSTANTS = require('../constants');
const dailyLogger = require('./dailyLogger');
const { atMidnight } = require('./cronTab');

atMidnight(()=> dailyLogger(CONSTANTS.LOG_FILES.DIR_PATH, CONSTANTS.LOG_FILES.ERRORS));

// dailyLogger(CONSTANTS.LOG_FILES.DIR_PATH, CONSTANTS.LOG_FILES.ERRORS);
