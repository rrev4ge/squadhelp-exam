const fs = require('fs');
const path = require('path');

const pathGenerator = async (dirPath, fileName, date='') => {

  dirPath = path.join(__dirname, dirPath);
  fileName = date ? `/${date+'_daily_'+fileName}` : `/${fileName}`;

  const filePath = path.join(dirPath, fileName);

  try {
    await fs.mkdirSync(dirPath, { recursive: true });
    return filePath;
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
    return filePath;
  }
};

module.exports = pathGenerator;
