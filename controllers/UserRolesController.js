const UserRoles = require('../models/UserRoles');
const { Op } = require('sequelize');

exports.getAllUserRoles = async (req, res) => {
    try {
      const { page = 1, perPage = 10 } = req.query;
      const offset = (page - 1) * perPage;
  
      const user_roles = await UserRoles.findAll({
        offset,
        limit: perPage,
      });
  
      if (user_roles.length === 0) {
        return res.status(404).json({ message: 'No users roles found' });
      }
  
      res.json(user_roles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

exports.getUserRoleById = async (req, res) => {
  try {
    const { id } = req.params;
    const user_roles = await UserRoles.findByPk(id);
    if (!user_roles) {
      return res.status(404).json({ message: 'User Role not found' });
    }

    res.json(user_roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const user_role = await UserRoles.findByPk(id);

    if (!user_role) {
      return res.status(404).json({ message: 'User Role not found' });
    }

    user_role.name = name;

    await user_role.save();

    res.json(user_role);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
