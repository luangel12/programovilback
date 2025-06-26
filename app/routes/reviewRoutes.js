const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController'); // Importar el controlador de valoraciones

// Ruta para obtener todas las valoraciones
router.get('/', reviewController.getReviews);

// Ruta para crear una nueva valoración
router.post('/', reviewController.createReview);

module.exports = router;
