const express = require('express');
const router = express.Router();
const evaluationController = require('../controllers/rateController'); 

// Ruta para obtener las preguntas y sus opciones
router.get('/', evaluationController.getGroupsWithLabels);

module.exports = router;
