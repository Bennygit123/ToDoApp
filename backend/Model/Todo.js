const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['completed', 'ongoing'],
        default: 'ongoing',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Todo', TodoSchema);
