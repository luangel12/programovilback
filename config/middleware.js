// config/middleware.js
const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  // Obtener encabezado Authorization
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      message: 'Token no proporcionado o mal formado',
      detail: null,
    });
  }

  const token = authHeader.split(' ')[1]; // Extraer token

  try {
    // Verificar token con la clave secreta (ideal desde .env)
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret-key');

    // Guardar datos del usuario en la petición
    req.user = decoded;

    next(); // Continuar al siguiente middleware o ruta
  } catch (error) {
    console.error('Error al verificar el token:', error.message);
    return res.status(401).json({
      message: 'JWT no válido',
      detail: error.message,
    });
  }
};

module.exports = authenticateJWT;
