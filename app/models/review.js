const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',  // Referencia a la tabla 'Users'
      key: 'user_id',
    },
    allowNull: false,
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Teachers',  // Referencia a la tabla 'Teachers'
      key: 'teacher_id',
    },
    allowNull: false,
  },
  course_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Courses',  // Referencia a la tabla 'Courses'
      key: 'course_id',
    },
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,  // Establece la fecha de creación automáticamente
  },
}, {
  timestamps: false,  // Desactivar los campos createdAt y updatedAt
});

module.exports = Review;
