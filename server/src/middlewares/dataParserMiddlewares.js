module.exports.boolParser = async (req, res, next) => {
  for (const key in req.query) {
    if (req.query[key] === 'undefined') {
      req.query[key] = undefined;
    }
    if (req.query[key] === 'false') {
      req.query[key] = false;
    }
    if (req.query[key] === 'true') {
      req.query[key] = true;
    }
  }
  next();
};

module.exports.intParser = async (req, res, next) => {
  for (const key in req.query) {
    if (!isNaN(req.query[key])) {
      req.query[key] = await parseInt(req.query[key], 10);
    }
  }
  next();
};
