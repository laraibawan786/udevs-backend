const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

const connectDB = async () => {
  try {
    await pool.query('SELECT NOW()'); 
    console.log(' PostgreSQL connected successfully');
  } catch (error) {
    console.error(' PostgreSQL connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
  pool,
};
