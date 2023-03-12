const User = require('../models/UserModel');

// Creates a new user
const createUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser.save()
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Retrieve all users
const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Retrieve a single user by ID
const getUserById = (req, res) => {
  const { id } = req.params;

  User.findById(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Update a user by ID
const updateUserById = (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  User.findByIdAndUpdate(id, { name, email, password }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

// Delete a user by ID
const deleteUserById = (req, res) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.json(user);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
