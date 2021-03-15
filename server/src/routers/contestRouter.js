const express = require('express');

const basicMiddlewares = require('../middlewares/basicMiddlewares');
const contestController = require('../controllers/contestController');
const checkToken = require('../middlewares/checkTokenMiddlewares');
const dataParser = require('../middlewares/dataParserMiddlewares');
const upload = require('../utils/fileTransfer');

const contestRouter = express.Router();

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest,
);


contestRouter.get(
  '/customer',
  checkToken.checkToken,
  dataParser.boolParser,
  contestController.getCustomersContests,
);

contestRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById,
);

contestRouter.get(
  '/',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  dataParser.boolParser,
  contestController.getContests,
);

contestRouter.get(
  '/file/:fileName',
  checkToken.checkToken,
  contestController.downloadFile,
);

contestRouter.patch(
  '/update',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest,
);

contestRouter.post(
  '/createOffer',
  checkToken.checkToken,
  upload.uploadLogoFiles,
  basicMiddlewares.canSendOffer,
  contestController.setNewOffer,
);

contestRouter.patch(
  '/setOfferStatus',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomerWhoCreateContest,
  contestController.setOfferStatus,
);

module.exports = contestRouter;
