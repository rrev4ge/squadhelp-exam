const { hash } = require('bcrypt');
const CONSTANTS = require('./../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        firstName: 'qwertym',
        lastName: 'qwertym',
        displayName: 'moderator',
        password: await hash('123456', CONSTANTS.SALT_ROUNDS),
        email: 'qwertym@qwertym.qwertym',
        avatar: 'anon.png',
        role: CONSTANTS.MODERATOR,
        balance: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return await queryInterface.bulkDelete('Users', {
      email:{
        [Op.in]: ['qwertyb@qwertyb.qwertyb', 'asdfghb@asdfghb.asdfghb', 'qwertyc@qwertyc.qwertyc', 'asdfghc@asdfghc.asdfghc', 'qwertym@qwertym.qwertym'] },
    }, {});
  },
};
