// 5. create-users.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, allowNull: false },
      password: { type: Sequelize.STRING, allowNull: false },
      college_id: { type: Sequelize.INTEGER, references: { model: 'colleges', key: 'college_id' } },
      image_url: Sequelize.STRING
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('users')
};