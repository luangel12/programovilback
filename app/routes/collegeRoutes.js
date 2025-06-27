const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController'); // Importar el controlador de valoraciones

// Ruta para obtener todas las valoraciones
router.get('/', collegeController.getColleges);

// Ruta para crear una nueva valoración
router.post('/', collegeController.createCollege);

module.exports = router;
