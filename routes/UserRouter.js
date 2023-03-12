const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUserById);
router.patch('/:id', UserController.updateUserById);


// exports router
module.exports = router;
