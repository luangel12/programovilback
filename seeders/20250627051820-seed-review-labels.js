'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('review_labels', [
      { review_label_id: 1, review_id: 1, label_id: 1 },
      { review_label_id: 2, review_id: 1, label_id: 6 },
      { review_label_id: 3, review_id: 1, label_id: 9 },
      { review_label_id: 4, review_id: 2, label_id: 2 },
      { review_label_id: 5, review_id: 2, label_id: 7 },
      { review_label_id: 6, review_id: 2, label_id: 10 },
      { review_label_id: 7, review_id: 2, label_id: 1 },
      { review_label_id: 8, review_id: 3, label_id: 1 },
      { review_label_id: 9, review_id: 3, label_id: 5 },
      { review_label_id: 10, review_id: 3, label_id: 12 },
      { review_label_id: 11, review_id: 4, label_id: 2 },
      { review_label_id: 12, review_id: 4, label_id: 8 },
      { review_label_id: 13, review_id: 4, label_id: 10 },
      { review_label_id: 14, review_id: 4, label_id: 1 },
      { review_label_id: 15, review_id: 5, label_id: 3 },
      { review_label_id: 16, review_id: 5, label_id: 7 },
      { review_label_id: 17, review_id: 5, label_id: 11 },
      { review_label_id: 18, review_id: 5, label_id: 1 },
      { review_label_id: 19, review_id: 6, label_id: 1 },
      { review_label_id: 20, review_id: 6, label_id: 5 },
      { review_label_id: 21, review_id: 6, label_id: 9 },
      { review_label_id: 22, review_id: 7, label_id: 2 },
      { review_label_id: 23, review_id: 7, label_id: 6 },
      { review_label_id: 24, review_id: 7, label_id: 12 },
      { review_label_id: 25, review_id: 7, label_id: 1 },
      { review_label_id: 26, review_id: 8, label_id: 1 },
      { review_label_id: 27, review_id: 8, label_id: 6 },
      { review_label_id: 28, review_id: 8, label_id: 9 },
      { review_label_id: 29, review_id: 9, label_id: 13 },
      { review_label_id: 30, review_id: 9, label_id: 25 },
      { review_label_id: 31, review_id: 9, label_id: 6 },
      { review_label_id: 32, review_id: 9, label_id: 1 },
      { review_label_id: 33, review_id: 10, label_id: 5 },
      { review_label_id: 34, review_id: 10, label_id: 30 },
      { review_label_id: 35, review_id: 10, label_id: 10 },
      { review_label_id: 36, review_id: 10, label_id: 1 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('review_labels', null, {});
  }
};
