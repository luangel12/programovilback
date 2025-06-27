// 6. create-teachers.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teachers', {
      teacher_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      image_url: Sequelize.STRING,
      college_id: { type: Sequelize.INTEGER, references: { model: 'colleges', key: 'college_id' } },
      ratings: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('teachers')
};