'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teachers', [
      {
        teacher_id: 1,
        name: 'Juan Pérez',
        image_url: 'assets/images/teachers/profile.png',
        college_id: 1,
        ratings: 15
      },
      {
        teacher_id: 2,
        name: 'María Gómez',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 2,
        ratings: 12
      },
      {
        teacher_id: 3,
        name: 'Carlos Sánchez',
        image_url: 'assets/images/teachers/profile.png',
        college_id: 1,
        ratings: 16
      },
      {
        teacher_id: 4,
        name: 'Laura Fernández',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 3,
        ratings: 19
      },
      {
        teacher_id: 5,
        name: 'Ana Torres',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 2,
        ratings: 13
      },
      {
        teacher_id: 6,
        name: 'Miguel Rodríguez',
        image_url: 'assets/images/teachers/profile.png',
        college_id: 1,
        ratings: 11
      },
      {
        teacher_id: 7,
        name: 'Sofía Martínez',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 3,
        ratings: 12
      },
      {
        teacher_id: 8,
        name: 'Fiorella Capcha',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 4,
        ratings: 12
      },
      {
        teacher_id: 9,
        name: 'Ricardo López',
        image_url: 'assets/images/teachers/profile.png',
        college_id: 6,
        ratings: 10
      },
      {
        teacher_id: 10,
        name: 'Valeria Ríos',
        image_url: 'assets/images/teachers/profile2.png',
        college_id: 4,
        ratings: 14
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teachers', null, {});
  }
};
