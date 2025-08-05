const { Pool } = require('pg');

const { pool } = require('../config/db');
const findAllUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  } catch (error) {
    console.error(' Error fetching users:', error.message);
    throw error;
  }
};

const createUser = async (name, email) => {
  try {
    await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2)',
      [name, email]
    );
  } catch (error) {
    console.error(' Error creating user:', error.message);
    throw error;
  }
};

module.exports = {
  findAllUsers,
  createUser,
};
