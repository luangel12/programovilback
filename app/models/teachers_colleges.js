const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const TeachersColleges = sequelize.define('Teachers_Colleges', {
  teacher_college_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  college_id: { type: DataTypes.INTEGER },
  teacher_id: { type: DataTypes.INTEGER },
}, {
  tableName: 'teachers_colleges', timestamps: false
});

module.exports = TeachersColleges;