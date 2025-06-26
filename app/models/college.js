const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const College = sequelize.define('College', {
  college_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  teachers_amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,  // Desactivar los campos createdAt y updatedAt
});

module.exports = College;
