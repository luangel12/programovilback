const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Importar el controlador de usuarios

// Ruta para registrar un usuario
router.post('/register', userController.register);

// Ruta para hacer login de usuario
router.post('/login', userController.login);

module.exports = router;
