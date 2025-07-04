const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const ReviewLabel = sequelize.define('Review_Label', {
  review_label_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  review_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Reviews',  // Referencia a la tabla 'Reviews'
      key: 'review_id',
    },
    allowNull: false,
  },
  label_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Labels',  // Referencia a la tabla 'Labels'
      key: 'label_id',
    },
    allowNull: false,
  },
}, {
  tableName: 'review_labels',
  timestamps: false,  // Desactivar los campos createdAt y updatedAt
});

module.exports = ReviewLabel;
