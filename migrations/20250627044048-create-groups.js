// 3. create-groups.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups', {
      group_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      text: Sequelize.TEXT,
      image_url: Sequelize.STRING
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('groups')
};
