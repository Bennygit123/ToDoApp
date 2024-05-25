const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find().populate('user');
        res.json(todos);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Add a new todo
router.post('/', async (req, res) => {
    const { description, status, user } = req.body;
    try {
        const newTodo = new Todo({
            description,
            status,
            user,
        });
        const todo = await newTodo.save();
        res.json(todo);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
    try {
        await Todo.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Todo removed' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
