'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('labels', [
      { label_id: 1, name: '😄', image_url: '', group_id: 1 },
      { label_id: 2, name: '🙂', image_url: '', group_id: 1 },
      { label_id: 3, name: '😐', image_url: '', group_id: 1 },
      { label_id: 4, name: '😞', image_url: '', group_id: 1 },
      { label_id: 5, name: 'Muy claro', image_url: '', group_id: 2 },
      { label_id: 6, name: 'Claro', image_url: '', group_id: 2 },
      { label_id: 7, name: 'Algo claro', image_url: '', group_id: 2 },
      { label_id: 8, name: 'Un poco claro', image_url: '', group_id: 2 },
      { label_id: 9, name: 'Entusiasta', image_url: '', group_id: 3 },
      { label_id: 10, name: 'Paciente', image_url: '', group_id: 3 },
      { label_id: 11, name: 'Motivador', image_url: '', group_id: 3 },
      { label_id: 12, name: 'Empático', image_url: '', group_id: 3 },
      { label_id: 13, name: 'Muy puntual', image_url: '', group_id: 4 },
      { label_id: 14, name: 'Puntual', image_url: '', group_id: 4 },
      { label_id: 15, name: 'Poco puntual', image_url: '', group_id: 4 },
      { label_id: 16, name: 'Impuntual', image_url: '', group_id: 4 },
      { label_id: 17, name: 'Usa muchos recursos', image_url: '', group_id: 5 },
      { label_id: 18, name: 'Usa algunos recursos', image_url: '', group_id: 5 },
      { label_id: 19, name: 'Usa pocos recursos', image_url: '', group_id: 5 },
      { label_id: 20, name: 'No usa recursos', image_url: '', group_id: 5 },
      { label_id: 21, name: 'Muy participativo', image_url: '', group_id: 6 },
      { label_id: 22, name: 'Participativo', image_url: '', group_id: 6 },
      { label_id: 23, name: 'Poco participativo', image_url: '', group_id: 6 },
      { label_id: 24, name: 'Nada participativo', image_url: '', group_id: 6 },
      { label_id: 25, name: 'Muy justo', image_url: '', group_id: 7 },
      { label_id: 26, name: 'Justo', image_url: '', group_id: 7 },
      { label_id: 27, name: 'Poco justo', image_url: '', group_id: 7 },
      { label_id: 28, name: 'Injusto', image_url: '', group_id: 7 },
      { label_id: 29, name: 'Retroalimenta muy bien', image_url: '', group_id: 8 },
      { label_id: 30, name: 'Retroalimenta bien', image_url: '', group_id: 8 },
      { label_id: 31, name: 'Retroalimenta poco', image_url: '', group_id: 8 },
      { label_id: 32, name: 'No retroalimenta', image_url: '', group_id: 8 },
      { label_id: 33, name: 'Muy profesional', image_url: '', group_id: 9 },
      { label_id: 34, name: 'Profesional', image_url: '', group_id: 9 },
      { label_id: 35, name: 'Poco profesional', image_url: '', group_id: 9 },
      { label_id: 36, name: 'Nada profesional', image_url: '', group_id: 9 },
      { label_id: 37, name: 'Muy motivador', image_url: '', group_id: 10 },
      { label_id: 38, name: 'Motivador', image_url: '', group_id: 10 },
      { label_id: 39, name: 'Poco motivador', image_url: '', group_id: 10 },
      { label_id: 40, name: 'Nada motivador', image_url: '', group_id: 10 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('labels', null, {});
  }
};
