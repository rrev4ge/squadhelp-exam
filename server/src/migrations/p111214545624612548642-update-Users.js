module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
    })
      .then(() => {
        const pgEnumDropQuery = queryInterface.queryGenerator.pgEnumDrop('Users', 'role');
        return queryInterface.sequelize.query(pgEnumDropQuery);
      })
      .then(() => {
        return queryInterface.changeColumn('Users', 'role', {
          type: Sequelize.ENUM,
          values: ['customer', 'creator', 'moderator'],
          allowNull: false,
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
    })
      .then(() => {
        const pgEnumDropQuery = queryInterface.queryGenerator.pgEnumDrop('Users', 'role');
        return queryInterface.sequelize.query(pgEnumDropQuery);
      })
      .then(() => {
        return queryInterface.changeColumn('Users', 'role', {
          type: Sequelize.ENUM,
          values: ['customer', 'creator'],
          allowNull: false,
        });
      });
  },
};

