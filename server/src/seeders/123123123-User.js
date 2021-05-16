const { hash } = require('bcrypt');
const CONSTANTS = require('./../constants');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [
      {
        firstName: 'qwertyb',
        lastName: 'qwertyb',
        displayName: 'qwertyb',
        password: await hash('123456', CONSTANTS.SALT_ROUNDS),
        email: 'qwertyb@qwertyb.qwertyb',
        avatar: 'anon.png',
        role: CONSTANTS.CUSTOMER,
        balance: 50000,
      },
      {
        firstName: 'asdfghb',
        lastName: 'asdfghb',
        displayName: 'asdfghb',
        password: await hash('123456', CONSTANTS.SALT_ROUNDS),
        email: 'asdfghb@asdfghb.asdfghb',
        avatar: 'anon.png',
        role: CONSTANTS.CUSTOMER,
        balance: 50000,
      },
      {
        firstName: 'qwertyc',
        lastName: 'qwertyc',
        displayName: 'qwertyc',
        password: await hash('123456', CONSTANTS.SALT_ROUNDS),
        email: 'qwertyc@qwertyc.qwertyc',
        avatar: 'anon.png',
        role: CONSTANTS.CREATOR,
        balance: 0,
      },
      {
        firstName: 'asdfghc',
        lastName: 'asdfghc',
        displayName: 'asdfghc',
        password: await hash('123456', CONSTANTS.SALT_ROUNDS),
        email: 'asdfghc@asdfghc.asdfghc',
        avatar: 'anon.png',
        role: CONSTANTS.CREATOR,
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
