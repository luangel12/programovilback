// 11. create-teacher-course.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teacher_course', {
      teacher_course_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      teacher_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'teachers', key: 'teacher_id' } },
      course_id: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'courses', key: 'course_id' } }
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('teacher_course')
};