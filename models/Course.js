const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Course = sequelize.define('Course', {
  course_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  faculty_id: { type: DataTypes.INTEGER },
  teachers_amount: { type: DataTypes.INTEGER },
}, {
  tableName: 'courses', timestamps: false
});

module.exports = Course;
