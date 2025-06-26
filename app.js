const express = require('express');
const app = express();
const authenticateJWT = require('./config/middleware'); // Importar el middleware

const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

// Usar middleware para autenticación en rutas protegidas
app.use('/api/users', authRoutes);
app.use('/api/courses', authenticateJWT, courseRoutes);  // Rutas de cursos protegidas
app.use('/api/reviews', authenticateJWT, reviewRoutes);  // Rutas de valoraciones protegidas

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
