const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Group = sequelize.define('Group', {
  group_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  text: { type: DataTypes.TEXT },
  image_url: { type: DataTypes.STRING },
}, {
  tableName: 'groups', timestamps: false
});

module.exports = Group;