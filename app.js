const express = require('express');
const app = express();
const authenticateJWT = require('./config/middleware'); // Importar el middleware

const authRoutes = require('./app/routes/authRoutes');
const courseRoutes = require('./app/routes/courseRoutes');
const reviewRoutes = require('./app/routes/reviewRoutes');

app.use(express.json());

// Usar middleware para autenticación en rutas protegidas
app.use('/api/users', authRoutes);
app.use('/api/courses', authenticateJWT, courseRoutes);  // Rutas de cursos protegidas
app.use('/api/reviews', authenticateJWT, reviewRoutes);  // Rutas de valoraciones protegidas

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
