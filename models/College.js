const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const College = sequelize.define('College', {
  college_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image_url: { type: DataTypes.STRING },
  teachers_amount: { type: DataTypes.INTEGER }
}, {
  tableName: 'colleges', timestamps: false
});

module.exports = College;
