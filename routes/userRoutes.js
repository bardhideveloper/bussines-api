const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getUserById);

router.post('/users', UserController.createUser);
router.delete('/users/:id', UserController.deleteUser);
router.put('/users/:id', UserController.updateUser);

module.exports = router