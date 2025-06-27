'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('faculties', [
      { faculty_id: 1, name: 'Facultad de Ingeniería', college_id: 1, teachers_amount: 10 },
      { faculty_id: 11, name: 'Facultad de Derecho', college_id: 1, teachers_amount: 8 },
      { faculty_id: 2, name: 'Facultad de Ciencias', college_id: 2, teachers_amount: 28 },
      { faculty_id: 12, name: 'Facultad de Medicina', college_id: 2, teachers_amount: 15 },
      { faculty_id: 3, name: 'Facultad de Humanidades', college_id: 3, teachers_amount: 15 },
      { faculty_id: 13, name: 'Facultad de Arquitectura', college_id: 3, teachers_amount: 7 },
      { faculty_id: 4, name: 'Facultad de Economía y Negocios', college_id: 4, teachers_amount: 18 },
      { faculty_id: 14, name: 'Facultad de Ingeniería Ambiental', college_id: 4, teachers_amount: 5 },
      { faculty_id: 5, name: 'Facultad de Ciencias Sociales', college_id: 5, teachers_amount: 14 },
      { faculty_id: 15, name: 'Facultad de Psicología', college_id: 5, teachers_amount: 6 },
      { faculty_id: 6, name: 'Facultad de Ingeniería', college_id: 6, teachers_amount: 20 },
      { faculty_id: 16, name: 'Facultad de Ciencias Económicas', college_id: 6, teachers_amount: 12 },
      { faculty_id: 7, name: 'Facultad de Ciencias', college_id: 7, teachers_amount: 25 },
      { faculty_id: 17, name: 'Facultad de Derecho', college_id: 7, teachers_amount: 10 },
      { faculty_id: 8, name: 'Facultad de Economía y Negocios', college_id: 8, teachers_amount: 22 },
      { faculty_id: 18, name: 'Facultad de Administración', college_id: 8, teachers_amount: 9 },
      { faculty_id: 9, name: 'Facultad de Humanidades', college_id: 9, teachers_amount: 17 },
      { faculty_id: 19, name: 'Facultad de Derecho', college_id: 9, teachers_amount: 7 },
      { faculty_id: 10, name: 'Facultad de Ciencias Sociales', college_id: 10, teachers_amount: 12 },
      { faculty_id: 20, name: 'Facultad de Ingeniería Civil', college_id: 10, teachers_amount: 8 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('faculties', null, {});
  }
};
