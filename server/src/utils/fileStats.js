const fs = require('fs');

const fileStats = (file)=>{
  try {
    const stats = fs.statSync(file);
    return stats;
  } catch (err) {
    return err;
  }
};

module.exports = fileStats;
