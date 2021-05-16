module.exports = {
  DEVELOPMENT_PORT: 5000,
  JWT_SECRET: 'asdasdasd4as5d4as8d7a8sd4as65d4a8sd7asd4as56d4',
  ACCESS_TOKEN_TIME: 60 * 60,
  SALT_ROUNDS: 5,
  SQUADHELP_BANK_NUMBER: '6011601160116611',
  SQUADHELP_BANK_NAME: 'SquadHelp',
  SQUADHELP_BANK_CVC: '111',
  SQUADHELP_BANK_EXPIRY: '09/29',
  CUSTOMER: 'customer',
  CREATOR: 'creator',
  CREATOR_ENTRIES: 'creator_entries',
  CONTEST_STATUS_ACTIVE: 'active',
  CONTEST_STATUS_FINISHED: 'finished',
  CONTEST_STATUS_PENDING: 'pending',
  CONTESTS_DEFAULT_DIR: './public/contestFiles/',
  UPLOAD_FILE_DEV_DIR: './public/images/',
  UPLOAD_FILE_PROD_DIR: '/var/www/html/images/',
  NAME_CONTEST: 'name',
  LOGO_CONTEST: 'logo',
  TAGLINE_CONTEST: 'tagline',
  OFFER_STATUS_CHECKING: 'checking',
  OFFER_STATUS_LOCKED: 'locked',
  OFFER_STATUS_PENDING: 'pending',
  OFFER_STATUS_REJECTED: 'rejected',
  OFFER_STATUS_WON: 'won',
  FILES_PATH: '../public',
  SOCKET_CONNECTION: 'connection',
  SOCKET_SUBSCRIBE: 'subscribe',
  SOCKET_UNSUBSCRIBE: 'unsubscribe',
  NOTIFICATION_ENTRY_CREATED: 'onEntryCreated',
  NOTIFICATION_CHANGE_MARK: 'changeMark',
  NOTIFICATION_CHANGE_OFFER_STATUS: 'changeOfferStatus',
  NEW_MESSAGE: 'newMessage',
  CHANGE_BLOCK_STATUS: 'CHANGE_BLOCK_STATUS',
  LOG_FILES: {
    DIR_PATH: '../../logs/',
    ERRORS: 'errors_log.json',
  },
  SERVICE_EMAIL_ACCOUNT: {
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    // service: 'gmail',
    auth: {
      user:'user',
      pass: 'pass',
    },
  },
  MODERATOR: 'moderator',
};
