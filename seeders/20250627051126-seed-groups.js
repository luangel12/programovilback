'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
      { group_id: 2, name: 'curso', text: 'Elige el curso', image_url: 'assets/images/groups/curso.png' },
      { group_id: 4, name: 'Puntualidad', text: '¿El profesor llega y termina a tiempo sus clases?', image_url: 'assets/images/groups/puntualidad.png' },
      { group_id: 5, name: 'Uso de recursos', text: '¿Utiliza materiales o recursos que apoyan el aprendizaje?', image_url: 'assets/images/groups/recursos.png' },
      { group_id: 6, name: 'Interacción con estudiantes', text: '¿Fomenta la participación y responde preguntas?', image_url: 'assets/images/groups/interaccion.png' },
      { group_id: 7, name: 'Evaluación justa', text: '¿Las evaluaciones son coherentes con lo enseñado?', image_url: 'assets/images/groups/evaluacion.png' },
      { group_id: 8, name: 'Retroalimentación', text: '¿Proporciona comentarios útiles para mejorar?', image_url: 'assets/images/groups/retroalimentacion.png' },
      { group_id: 9, name: 'Actitud profesional', text: '¿Mantiene una actitud respetuosa y profesional?', image_url: 'assets/images/groups/actitud.png' },
      { group_id: 10, name: 'Motivación', text: '¿Inspira o motiva a los estudiantes a aprender?', image_url: 'assets/images/groups/motivacion.png' },
      { group_id: 1, name: 'claridad', text: 'En general, ¿qué calificación le darías al profesor?', image_url: '' },
      { group_id: 3, name: 'comentario', text: 'Añade un comentario\n(opcional)', image_url: 'assets/images/groups/comentario.png' }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('groups', null, {});
  }
};
