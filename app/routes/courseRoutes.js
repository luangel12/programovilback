const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController'); // Importar el controlador de cursos

// Ruta para obtener todos los cursos
router.get('/', courseController.getCourses);

// Ruta para crear un nuevo curso
router.post('/', courseController.createCourse);

module.exports = router;
