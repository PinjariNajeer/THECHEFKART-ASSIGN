const express = require('express');
const { Post, User } = require('../models');

const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.findAll({ include: User });
  res.json(posts);
});

// Create a post
router.post('/:userId', async (req, res) => {
  const user = await User.findByPk(req.params.userId);
  if (!user) return res.status(404).send('User not found');
  
  const post = await Post.create({ ...req.body, userId: req.params.userId });
  await user.increment('postCount');
  res.status(201).json(post);
});

// Edit a post
router.put('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).send('Post not found');
  
  await post.update(req.body);
  res.json(post);
});

// Delete a post
router.delete('/:id', async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).send('Post not found');
  
  await post.destroy();
  res.status(204).send();
});

module.exports = router;
