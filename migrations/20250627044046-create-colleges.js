// 1. create-colleges.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('colleges', {
      college_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      image_url: Sequelize.STRING,
      teachers_amount: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('colleges')
};