
const jwt = require('jsonwebtoken');
const User = require('../models/user')

exports.getProfile = async (req, res) => {
 try {
  const user = await User.findByPk(req.user_id, {
   attributes: ['user_id', 'username', 'email', 'image_url', 'college_id'] // excluye password

  });

  if (!user) {
   return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json({ user });

 } catch (err) {

  res.status(500).json({ error: err.message });

 }

};