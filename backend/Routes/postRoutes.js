const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('user');
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Add a new post
router.post('/', async (req, res) => {
    const { title, content, user } = req.body;
    try {
        const newPost = new Post({
            title,
            content,
            user,
        });
        const post = await newPost.save();
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete a post
router.delete('/:id', async (req, res) => {
    try {
        await Post.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Post removed' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
