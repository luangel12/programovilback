const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Faculty = sequelize.define('Faculty', {
  faculty_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  college_id: { type: DataTypes.INTEGER },
  teachers_amount: { type: DataTypes.INTEGER },
}, {
  tableName: 'faculties', timestamps: false
});

module.exports = Faculty;