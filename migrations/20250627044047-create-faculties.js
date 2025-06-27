
// 2. create-faculties.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('faculties', {
      faculty_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: Sequelize.STRING, allowNull: false },
      college_id: { type: Sequelize.INTEGER, references: { model: 'colleges', key: 'college_id' } },
      teachers_amount: Sequelize.INTEGER
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('faculties')
};
