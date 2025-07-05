const dotenv = require("dotenv");
dotenv.config()

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
const authenticateJWT = require('./config/middleware'); // Importar el middleware

const authRoutes = require('./app/routes/authRoutes');
const courseRoutes = require('./app/routes/courseRoutes');
const reviewRoutes = require('./app/routes/reviewRoutes');
const rateRoutes = require('./app/routes/rateRoutes');
const collegeRoutes = require('./app/routes/collegeRoutes')
const teacherRoutes = require('./app/routes/teacherRouter')
const userRoutes = require('./app/routes/userRoutes')


app.use(express.json());

// Usar middleware para autenticación en rutas protegidas
app.use('/api/users', authRoutes);
app.use('/api/courses', authenticateJWT, courseRoutes);  // Rutas de cursos protegidas
app.use('/api/reviews', authenticateJWT, reviewRoutes);  // Rutas de valoraciones protegidas
app.use('/api/rate', authenticateJWT, rateRoutes);  // Rutas de evaluacion protegidas
app.use('/api/colleges', authenticateJWT, collegeRoutes)
app.use('/api/teachers', authenticateJWT, teacherRoutes)
app.use('/api/users', authenticateJWT, userRoutes)

app.listen(PORT, () => {
  console.log(`Servidor en el puerto  ${PORT}`);
});
