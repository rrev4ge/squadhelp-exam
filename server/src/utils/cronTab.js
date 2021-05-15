const moment = require('moment');

function atMidnight () {
  const args = [...arguments];

  const now = moment();
  const night = moment().endOf('day');
  const duration = moment.duration(night.diff(now)).valueOf();

  setTimeout(function() {
    console.log(`Now: ${now}\nNight: ${night}\nDuration: ${duration}`);
    args.forEach(f => f());
  }, duration);
}

module.exports = { atMidnight };
