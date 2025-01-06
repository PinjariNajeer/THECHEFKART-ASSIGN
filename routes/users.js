const express = require('express');
const { User, Post } = require('../models');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await User.findAll({ include: Post });
  res.json(users);
});

// Get all posts by a user
router.get('/:id/posts', async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: Post });
  if (!user) return res.status(404).send('User not found');
  res.json(user.Posts);
});

module.exports = router;
