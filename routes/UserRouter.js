const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);
router.post('/users/', UserController.createUser);
router.delete('/users/:id', UserController.deleteUserById);
router.patch('/users/:id', UserController.updateUserById);

// exports router
module.exports = router;
