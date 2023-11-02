const express = require('express');
const router = express.Router();
const UserRolesController = require('../controllers/UserRolesController.js');

router.get('/user-roles', UserRolesController.getAllUserRoles);
router.get('/user-roles/:id', UserRolesController.getUserRoleById);
router.put('/user-roles/:id', UserRolesController.updateUserRole);

module.exports = router