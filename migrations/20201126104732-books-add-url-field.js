'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await  queryInterface.addColumn(
        'Books',
        'url',
        Sequelize.STRING
    );
  },

  down: async function (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
        'Books',
        'url',
        Sequelize.STRING
    );
  }
};