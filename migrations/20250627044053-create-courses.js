// 9. create-courses.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      course_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      faculty_id: { type: Sequelize.INTEGER, references: { model: 'faculties', key: 'faculty_id' } },
      teachers_amount: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('courses')
};