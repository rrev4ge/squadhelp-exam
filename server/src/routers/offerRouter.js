const express = require('express');

const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkTokenMiddlewares');

const offerRouter = express.Router();


offerRouter.patch(
  '/moderateOffer',
  checkToken.checkToken,
  basicMiddlewares.onlyForModerator,
  contestController.moderateOffer,
);

offerRouter.get(
  '/getOffers',
  checkToken.checkToken,
  basicMiddlewares.onlyForModerator,
  contestController.getOffers,
);

module.exports = offerRouter;
