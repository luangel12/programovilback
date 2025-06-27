const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
// models/Label.js
const Label = sequelize.define('Label', {
  label_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  image_url: { type: DataTypes.STRING },
  group_id: { type: DataTypes.INTEGER },
}, {
  tableName: 'labels', timestamps: false
});

module.exports = Label;
