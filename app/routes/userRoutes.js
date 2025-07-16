const express = require('express');
const router = express.Router();
const perfil = require('../controllers/userCotroller');

router.get('/perfil/', perfil.getProfile);
router.put('/editar', perfil.editProfile);

module.exports = router;
