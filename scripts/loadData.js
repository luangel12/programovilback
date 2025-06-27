
// scripts/loadData.js
const fs = require('fs');
const path = require('path');
const sequelize = require('../config/database'); // Asegúrate de que el path es correcto

const sqlPath = path.join(__dirname, '../db/datos.sql');
const sqlContent = fs.readFileSync(sqlPath, 'utf-8');

sequelize.query(sqlContent)
  .then(() => {
    console.log('📥 Datos insertados correctamente desde datos.sql');
    process.exit(0);
  })
  .catch((err) => {
    console.error('❌ Error al ejecutar datos.sql:', err.message);
    process.exit(1);
  });
