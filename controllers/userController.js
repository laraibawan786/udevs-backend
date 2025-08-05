const { findAllUsers, createUser } = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error(' Error fetching users:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
const addUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    await createUser(name, email);
    res.status(201).json({ message: 'User added successfully' });
  } catch (err) {
    console.error(' Error adding user:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getUsers,
  addUser,
};
