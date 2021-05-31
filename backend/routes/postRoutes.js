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
// GET /api/posts/:id
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

//Create post
//POST /api/posts/add
router.post(
  '/',
  asyncHandler(async (req, res) => {
    console.log(req.body);
    const title = req.body.title;
    const body = req.body.body;
    const date = new Date();

    const newPost = new Post({
      title,
      body,
    });

    await newPost
      .save()
      .then(() => res.json('Post added!'))
      .catch((err) => res.status(400).json('Error: ' + err));
  })
);

//PUT /api/posts/edit
router.put(
  '/:id',
  asyncHandler(async (req, res) => {
    const { title, body } = req.body;

    const post = await Post.findById(req.params.id);

    if (post) {
      post.title = title;
      post.body = body;

      const updatedPost = await post.save();
      res.status(201).json(updatedPost);
    } else {
      res.status(404);
      throw new Error('Post not found');
    }
  })
);

//Delete a Post
//DELETE /api/posts/:id
router.delete(
  '/:id',
  asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post) {
      await post.remove();
      res.json({ message: 'Post removed!' });
    } else {
      res.status(404);
      throw new Error('Post Not Found');
    }
  })
);
export default router;
