import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();
import Post from '../models/postModel.js';

// Fetch all posts
// GET /api/posts
// Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const posts = await Post.find({});

    res.json(posts);
  })
);

// Fetch post
// GET /api/post
// Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  })
);

export default router;
