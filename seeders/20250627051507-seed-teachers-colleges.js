'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teachers_colleges', [
      { teacher_college_id: 1, college_id: 1, teacher_id: 1 },
      { teacher_college_id: 2, college_id: 1, teacher_id: 2 },
      { teacher_college_id: 3, college_id: 1, teacher_id: 3 },
      { teacher_college_id: 4, college_id: 1, teacher_id: 4 },
      { teacher_college_id: 5, college_id: 1, teacher_id: 5 },
      { teacher_college_id: 6, college_id: 1, teacher_id: 6 },
      { teacher_college_id: 7, college_id: 1, teacher_id: 7 },
      { teacher_college_id: 8, college_id: 1, teacher_id: 8 },
      { teacher_college_id: 9, college_id: 1, teacher_id: 9 },
      { teacher_college_id: 10, college_id: 1, teacher_id: 10 },
      { teacher_college_id: 11, college_id: 1, teacher_id: 11 },
      { teacher_college_id: 12, college_id: 1, teacher_id: 12 },
      { teacher_college_id: 13, college_id: 1, teacher_id: 13 },
      { teacher_college_id: 14, college_id: 1, teacher_id: 14 },
      { teacher_college_id: 15, college_id: 1, teacher_id: 15 },
      { teacher_college_id: 16, college_id: 1, teacher_id: 16 },
      { teacher_college_id: 17, college_id: 1, teacher_id: 17 },
      { teacher_college_id: 18, college_id: 1, teacher_id: 18 },
      { teacher_college_id: 19, college_id: 1, teacher_id: 19 },
      { teacher_college_id: 20, college_id: 1, teacher_id: 20 },
      { teacher_college_id: 21, college_id: 1, teacher_id: 21 },
      { teacher_college_id: 22, college_id: 1, teacher_id: 22 },
      { teacher_college_id: 23, college_id: 1, teacher_id: 23 },
      { teacher_college_id: 24, college_id: 1, teacher_id: 24 },
      { teacher_college_id: 25, college_id: 1, teacher_id: 25 },
      { teacher_college_id: 26, college_id: 1, teacher_id: 26 },
      { teacher_college_id: 27, college_id: 1, teacher_id: 27 },
      { teacher_college_id: 28, college_id: 1, teacher_id: 28 },
      { teacher_college_id: 29, college_id: 1, teacher_id: 29 },
      { teacher_college_id: 30, college_id: 1, teacher_id: 30 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teachers_colleges', null, {});
  }
};
