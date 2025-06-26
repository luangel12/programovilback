const User = require('../models/user');

// Crear un nuevo usuario
exports.createUser = async (userData) => {
  const { username, email, password, image_url, college_id } = userData;

  const newUser = await User.create({
    username,
    email,
    password,
    image_url,
    college_id,
  });

  return newUser;
};

// Obtener todos los usuarios
exports.getUsers = async () => {
  const users = await User.findAll();
  return users;
};
