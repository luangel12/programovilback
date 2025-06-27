const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseControlller'); // Importar el controlador de cursos

// Ruta para obtener todos los cursos
router.get('/', courseController.getCourses);

// Ruta para crear un nuevo curso
router.post('/', courseController.createCourse);

// Ruta para obtener un curso por ID
router.get('/:id', courseController.getCourseById);

// Obtener cursos por universidad
router.get('/college/:college_id', courseController.getCoursesByCollege);

module.exports = router;
