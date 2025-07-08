const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ error: 'Token no proporcionado o mal formado' });
  }

  const token = authHeader.split(' ')[1]; // Extrae solo el token (sin 'Bearer')

  jwt.verify(token, 'secretkey', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Token no válido' });
    }

    req.user = user;
    next();
  });
};

module.exports = authenticateJWT;
