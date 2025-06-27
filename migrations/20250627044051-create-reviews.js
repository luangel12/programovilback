// 7. create-reviews.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews', {
      review_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: Sequelize.INTEGER, references: { model: 'users', key: 'user_id' } },
      teacher_id: { type: Sequelize.INTEGER, references: { model: 'teachers', key: 'teacher_id' } },
      course_id: { type: Sequelize.INTEGER, references: { model: 'courses', key: 'course_id' } },
      comment: Sequelize.TEXT,
      date: Sequelize.STRING
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('reviews')
};