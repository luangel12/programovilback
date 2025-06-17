const express = require('express');
const router = express.Router();
const { College } = require('../models');

// Obtener todas las universidades
router.get('/', async (req, res) => {
  try {
    const colleges = await College.findAll();
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener universidad por ID
router.get('/:id', async (req, res) => {
  try {
    const college = await College.findByPk(req.params.id);
    if (!college) return res.status(404).json({ error: 'Universidad no encontrada' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear nueva universidad
router.post('/', async (req, res) => {
  try {
    const college = await College.create(req.body);
    res.status(201).json(college);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;