const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Registro de usuario
exports.register = async (req, res) => {
  const { username, email, password} = req.body;

  try {
    const hashedPassword = password //await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      image_url: 'assets/images/profileDefault.png',
      college_id: 1,
    });
    
    const token = jwt.sign({ user_id: user.user_id }, 'secretkey', { expiresIn: '1h' });
    res.status(201).json({ token, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login de usuario
exports.login = async (req, res) => {
  

  try {

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    const isMatch = password === user.password//await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign({ user_id: user.user_id }, 'secretkey', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
