// 4. create-labels.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('labels', {
      label_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      image_url: Sequelize.STRING,
      group_id: { type: Sequelize.INTEGER, references: { model: 'groups', key: 'group_id' } }
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('labels')
};