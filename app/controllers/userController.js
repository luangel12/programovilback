const User = require('../models/user');

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);  // Suponiendo que recibes los datos del usuario en el cuerpo de la solicitud
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
