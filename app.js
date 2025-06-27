// app.js
require("dotenv").config(); // Cargar variables de entorno

const express = require("express");
const morgan = require("morgan");
const sequelize = require("./config/database"); // Conexión a Sequelize
const authenticateJWT = require("./config/middleware"); // Middleware JWT

// Rutas
const authRoutes = require("./app/routes/authRoutes");
const courseRoutes = require("./app/routes/courseRoutes");
const reviewRoutes = require("./app/routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares globales
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));

// Rutas públicas
app.use("/api/users", authRoutes);

// Rutas protegidas
app.use("/api/courses", authenticateJWT, courseRoutes);
app.use("/api/reviews", authenticateJWT, reviewRoutes);

// Conexión y sincronización con la base de datos
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión con la base de datos establecida");

    // Solo usa alter:true si estás desarrollando y quieres actualizar las tablas
    await sequelize.sync({ alter: true });
    console.log("📦 Base de datos sincronizada correctamente");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error al iniciar la app:", err.message);
  }
};

startServer();
