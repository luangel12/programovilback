const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');  // Rutas de autenticación
const courseRoutes = require('./routes/courseRoutes');  // Rutas de cursos
const reviewRoutes = require('./routes/reviewRoutes');  // Rutas de valoraciones

app.use(express.json());  // Para manejar solicitudes JSON

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
