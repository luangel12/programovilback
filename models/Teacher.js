const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Teacher = sequelize.define('Teacher', {
  teacher_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image_url: { type: DataTypes.STRING },
  college_id: { type: DataTypes.INTEGER },
  ratings: { type: DataTypes.INTEGER },
}, {
  tableName: 'teachers', timestamps: false
});

module.exports = Teacher;