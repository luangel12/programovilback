// 8. create-teachers-colleges.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teachers_colleges', {
      teacher_college_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      college_id: { type: Sequelize.INTEGER, references: { model: 'colleges', key: 'college_id' } },
      teacher_id: { type: Sequelize.INTEGER, references: { model: 'teachers', key: 'teacher_id' } }
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('teachers_colleges')
};