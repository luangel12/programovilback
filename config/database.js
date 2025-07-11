const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/ProfeStast.db',
  dialectOptions: {
    
    mode: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  },
  logging: false, 
});

// Establecer busy_timeout para evitar SQLITE_BUSY
sequelize
  .authenticate()
  .then(async () => {
    console.log('Conexión exitosa a la base de datos.');

    // Ejecutar PRAGMA busy_timeout al conectar
    await sequelize.query('PRAGMA busy_timeout = 5000;');
    console.log('PRAGMA busy_timeout configurado a 5000 ms.');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
