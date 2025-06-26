const { Sequelize } = require('sequelize');

// Crear una instancia de Sequelize para conectar con SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/ProfeStast.db'
});

// Verificar la conexión
sequelize.authenticate()
  .then(() => console.log('Conexión exitosa a la base de datos.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;
