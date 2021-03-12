module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [
      {
        cardNumber: '6011601160116611',
        name: 'SquadHelp',
        expiry: '09/29',
        cvc: '111',
        balance: 0,
      },
      {
        cardNumber: '4111111111111111',
        name: 'qwertyb',
        expiry: '09/29',
        cvc: '111',
        balance: 50000,
      },
      {
        cardNumber: '4444333322221111',
        name: 'asdfgb',
        expiry: '09/29',
        cvc: '111',
        balance: 50000,
      },
      {
        cardNumber: '5555555555554444',
        name: 'qwertyc',
        expiry: '09/29',
        cvc: '111',
        balance: 0,
      },
      {
        cardNumber: '5555444433331111',
        name: 'asdfgc',
        expiry: '09/29',
        cvc: '111',
        balance: 0,
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('Bankss', {
      cardNumber:{
        [Op.in]: ['6011601160116611', '4111111111111111', '4444333322221111', '5555555555554444', '5555444433331111'] },
    }, {});
  },
};
