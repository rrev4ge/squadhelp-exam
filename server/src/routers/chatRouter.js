const express = require('express');

const dataParser = require('../middlewares/dataParserMiddlewares');
const checkToken = require('../middlewares/checkTokenMiddlewares');
const chatController = require('../controllers/chatController');


const chatRouter = express.Router();

chatRouter.post(
  '/messages',
  checkToken.checkToken,
  chatController.addMessage,
);

chatRouter.get(
  '/preview',
  checkToken.checkToken,
  chatController.getPreview,
);

chatRouter.get(
  '/dialog',
  checkToken.checkToken,
  dataParser.intParser,
  chatController.getChat,
);


chatRouter.post(
  '/blackList',
  checkToken.checkToken,
  chatController.blackList,
);

chatRouter.post(
  '/favorites',
  checkToken.checkToken,
  chatController.favoriteChat,
);

chatRouter
  .route('/catalogs')
  .get(
    checkToken.checkToken,
    chatController.getCatalogs,
  )
  .post(
    checkToken.checkToken,
    chatController.createCatalog,
  )
  .patch(
    checkToken.checkToken,
    chatController.updateNameCatalog,
  )
  .delete(
    checkToken.checkToken,
    chatController.deleteCatalog,
  );

chatRouter
  .route('/catalogs/dialogs')
  .post(
    checkToken.checkToken,
    chatController.addNewChatToCatalog,
  )
  .delete(
    checkToken.checkToken,
    chatController.removeChatFromCatalog,
  );

module.exports = chatRouter;
