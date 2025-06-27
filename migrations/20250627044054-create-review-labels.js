// 10. create-review-labels.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('review_labels', {
      review_label_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      review_id: { type: Sequelize.INTEGER, references: { model: 'reviews', key: 'review_id' } },
      label_id: { type: Sequelize.INTEGER, references: { model: 'labels', key: 'label_id' } }
    });
  },
  down: async (queryInterface) => await queryInterface.dropTable('review_labels')
};