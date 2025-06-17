// 1. Importaciones
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./config/database');
const middlewares = require('./config/middlewares');

// 2. Controllers (cada uno exporta un router de Express)
const authController    = require('./app/controllers/auth_controller');
const userController    = require('./app/controllers/user_controller');
const collegeController = require('./app/controllers/college_controller');
const courseController  = require('./app/controllers/course_controller');
const teacherController = require('./app/controllers/teacher_controller');
const reviewController  = require('./app/controllers/review_controller');

(async () => {
  // 3. Conexión a la base de datos
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida.');
    await sequelize.sync(); // Crea/actualiza tablas según los modelos
  } catch (err) {
    console.error('❌ No se pudo conectar a la base de datos:', err);
    process.exit(1);
  }

  // 4. Crear la app Express
  const app = express();

  // 5. Middlewares globales
  app.use(cors());                      
  app.use(express.json());              
  app.use(express.urlencoded({ extended: true })); 
  app.use(morgan('dev'));               
  middlewares(app); // Ej. manejo de errores, validación, etc.

  // 6. Montar controllers directamente
  app.use('/api/auth',    authController);
  app.use('/api/users',   userController);
  app.use('/api/colleges', collegeController);
  app.use('/api/courses',  courseController);
  app.use('/api/teachers', teacherController);
  app.use('/api/reviews',  reviewController);

  // 7. Ruta raíz de prueba
  app.get('/', (req, res) => {
    res.json({ message: 'Backend de Programovil funcionando 🚀' });
  });

  // 8. Arranque del servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🌐 Servidor escuchando en http://localhost:${PORT}`);
  });
})();
