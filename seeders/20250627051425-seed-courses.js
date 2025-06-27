'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [
      { course_id: 1, name: "Cálculo I", faculty_id: 1, teachers_amount: 3 },
      { course_id: 2, name: "Álgebra Lineal", faculty_id: 1, teachers_amount: 3 },
      { course_id: 3, name: "Fundamentos de Programación", faculty_id: 2, teachers_amount: 3 },
      { course_id: 4, name: "Estructuras Discretas", faculty_id: 2, teachers_amount: 3 },
      { course_id: 5, name: "Economía General", faculty_id: 3, teachers_amount: 3 },
      { course_id: 6, name: "Macroeconomía", faculty_id: 3, teachers_amount: 3 },
      { course_id: 7, name: "Análisis Matemático", faculty_id: 1, teachers_amount: 3 },
      { course_id: 8, name: "Microeconomía", faculty_id: 3, teachers_amount: 2 },
      { course_id: 9, name: "Estadística", faculty_id: 1, teachers_amount: 1 },
      { course_id: 10, name: "Contabilidad Básica", faculty_id: 3, teachers_amount: 1 },
      { course_id: 11, name: "Introducción a la Computación", faculty_id: 2, teachers_amount: 1 },
      { course_id: 12, name: "Base de Datos", faculty_id: 2, teachers_amount: 1 },
      { course_id: 13, name: "Sistemas Operativos", faculty_id: 2, teachers_amount: 1 },
      { course_id: 14, name: "Redes", faculty_id: 2, teachers_amount: 1 },
      { course_id: 15, name: "Simulación", faculty_id: 2, teachers_amount: 1 },
      { course_id: 16, name: "Inteligencia Artificial", faculty_id: 2, teachers_amount: 1 },
      { course_id: 17, name: "Ingeniería de Software", faculty_id: 2, teachers_amount: 1 },
      { course_id: 18, name: "Administración", faculty_id: 3, teachers_amount: 1 },
      { course_id: 19, name: "Gestión Empresarial", faculty_id: 3, teachers_amount: 1 },
      { course_id: 20, name: "Matemática Financiera", faculty_id: 3, teachers_amount: 1 },
      { course_id: 21, name: "Taller de Programación", faculty_id: 2, teachers_amount: 1 },
      { course_id: 22, name: "Tópicos Avanzados en TI", faculty_id: 2, teachers_amount: 1 },
      { course_id: 23, name: "Minería de Datos", faculty_id: 2, teachers_amount: 1 },
      { course_id: 24, name: "Big Data", faculty_id: 2, teachers_amount: 1 },
      { course_id: 25, name: "Desarrollo Web", faculty_id: 2, teachers_amount: 1 },
      { course_id: 26, name: "Programación Móvil", faculty_id: 2, teachers_amount: 1 },
      { course_id: 27, name: "Innovación", faculty_id: 3, teachers_amount: 1 },
      { course_id: 28, name: "Emprendimiento", faculty_id: 3, teachers_amount: 1 },
      { course_id: 29, name: "Dirección Estratégica", faculty_id: 3, teachers_amount: 1 },
      { course_id: 30, name: "Proyecto Final", faculty_id: 2, teachers_amount: 1 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
