const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  faculty_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Faculties',
      key: 'faculty_id',
    },
    allowNull: false,
  },
  teachers_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Course;
