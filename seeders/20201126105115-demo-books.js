'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Books', [{
            title: 'Belajar Node Js',
            description: 'Buku tentang belajar NodeJS',
            published: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});

    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
