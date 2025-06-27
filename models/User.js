const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');  // Asegúrate de tener esta conexión configurada

const User = sequelize.define('User', {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  college_id: { type: DataTypes.INTEGER },
  image_url: { type: DataTypes.STRING },
}, {
  tableName: 'users', timestamps: false
});

module.exports = User;
