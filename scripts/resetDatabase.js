const { exec } = require("child_process");
const path = require("path");

const dbPath = path.resolve(__dirname, "../db/ProfeStast.db");
const schemaPath = path.resolve(__dirname, "../db/schema.sql");
const dataPath = path.resolve(__dirname, "../db/datos.sql");

console.log("🧹 Borrando base de datos...");

exec(`rm -f "${dbPath}"`, (err) => {
  if (err) return console.error("❌ Error al borrar DB:", err);

  console.log("📄 Creando estructura desde schema.sql...");
  exec(`sqlite3 "${dbPath}" < "${schemaPath}"`, (err) => {
    if (err) return console.error("❌ Error al crear tablas:", err);

    console.log("📥 Insertando datos desde datos.sql...");
    exec(`sqlite3 "${dbPath}" < "${dataPath}"`, (err) => {
      if (err) return console.error("❌ Error al insertar datos:", err);
      console.log("✅ Base de datos restaurada completamente.");
    });
  });
});
