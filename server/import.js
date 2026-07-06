const fs = require("fs");
const mysql = require("mysql2/promise");

async function importSQL() {
  const connection = await mysql.createConnection({
    host: "hayabusa.proxy.rlwy.net",
    port: 37771,
    user: "root",
    password: "mAXRrCzUSBKTMAcIuThwjtKBggRRatjh",
    database: "railway",
    multipleStatements: true
  });

  const sql = fs.readFileSync("../../bibliotheque.sql", "utf8");

  console.log("Import en cours...");
  await connection.query(sql);
  console.log("✅ Import terminé avec succès !");

  await connection.end();
}

importSQL().catch((err) => {
  console.error("❌ Erreur :", err.message);
});