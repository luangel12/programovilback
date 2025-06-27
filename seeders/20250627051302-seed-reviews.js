'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [
      {
        review_id: 1,
        user_id: 1,
        teacher_id: 1,
        course_id: 1,
        comment: "Explica muy bien y es divertido",
        date: "2024-03-12"
      },
      {
        review_id: 2,
        user_id: 1,
        teacher_id: 2,
        course_id: 2,
        comment: "Un poco estricto, pero se aprende",
        date: "2024-03-13"
      },
      {
        review_id: 3,
        user_id: 2,
        teacher_id: 2,
        course_id: 2,
        comment: "Explicaciones claras y concisas",
        date: "2024-03-13"
      },
      {
        review_id: 4,
        user_id: 3,
        teacher_id: 1,
        course_id: 1,
        comment: "Usa buenos ejemplos, pero habla rápido",
        date: "2024-03-13"
      },
      {
        review_id: 5,
        user_id: 3,
        teacher_id: 4,
        course_id: 5,
        comment: "Muy comprensivo y amable",
        date: "2024-03-13"
      },
      {
        review_id: 6,
        user_id: 2,
        teacher_id: 3,
        course_id: 3,
        comment: "La evaluación no fue justa",
        date: "2024-03-14"
      },
      {
        review_id: 7,
        user_id: 1,
        teacher_id: 5,
        course_id: 6,
        comment: "No se entendía mucho lo que explicaba",
        date: "2024-03-14"
      },
      {
        review_id: 8,
        user_id: 2,
        teacher_id: 1,
        course_id: 1,
        comment: "Me gustó su manera de enseñar",
        date: "2024-03-15"
      },
      {
        review_id: 9,
        user_id: 3,
        teacher_id: 2,
        course_id: 2,
        comment: "Muy puntual y exigente",
        date: "2024-03-15"
      },
      {
        review_id: 10,
        user_id: 2,
        teacher_id: 4,
        course_id: 5,
        comment: "Explica de forma sencilla temas difíciles",
        date: "2024-03-15"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('reviews', null, {});
  }
};
