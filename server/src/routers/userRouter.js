const express = require('express');

const hashPass = require('../middlewares/hashPassMiddlewares');
const checkToken = require('../middlewares/checkTokenMiddlewares');
const userController = require('../controllers/userController');
const validators = require('../middlewares/validatorMiddlewares');
const upload = require('../utils/fileTransfer');
const basicMiddlewares = require('../middlewares/basicMiddlewares');

const userRouter = express.Router();

userRouter.post(
  '/registration',
  validators.validateRegistrationData,
  hashPass,
  userController.registration,
);

userRouter.post(
  '/login',
  validators.validateLogin,
  userController.login,
);

userRouter.patch(
  '/update',
  checkToken.checkToken,
  upload.uploadAvatar,
  userController.updateUser,
);

userRouter.get(
  '/',
  checkToken.checkAuth,
);

userRouter.post(
  '/changeMark',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  userController.changeMark,
);

userRouter.post(
  '/pay',
  checkToken.checkToken,
  basicMiddlewares.onlyForCustomer,
  upload.uploadContestFiles,
  basicMiddlewares.parseBody,
  validators.validateContestCreation,
  userController.payment,
);

userRouter.post(
  '/cashout',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  userController.cashout,
);

module.exports = userRouter;
