const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController'); // Importar el controlador de valoraciones

// Ruta para obtener todas las valoraciones
router.get('/', reviewController.getReviews);

// Ruta para obtener todas las valoraciones de un profesor
router.get('/:teacher_id', reviewController.getReviewsByTeacher);

// Ruta para crear una nueva valoración
router.post('/', reviewController.createReview);

// Ruta para obtener todas las labels de un profesor
router.get('/labels/:teacher_id', reviewController.getLabelsByTeacher);


module.exports = router;
