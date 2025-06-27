const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const ReviewLabel = sequelize.define('ReviewLabel', {
  review_label_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  review_id: { type: DataTypes.INTEGER },
  label_id: { type: DataTypes.INTEGER },
}, {
  tableName: 'review_labels', timestamps: false
});

module.exports = ReviewLabel;