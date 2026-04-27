const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host:     process.env.DB_HOST     || "localhost",
  user:     process.env.DB_USER     || "root",
  password: process.env.DB_PASSWORD || "naveenA.24cse@",
  database: process.env.DB_NAME     || "skybook1",
  waitForConnections: true,
  connectionLimit: 10,
});

const db = pool.promise();

db.getConnection()
  .then(conn => {
    console.log("✅ MySQL connected successfully");
    conn.release();
  })
  .catch(err => console.error("❌ DB connection failed:", err.message));

module.exports = db;