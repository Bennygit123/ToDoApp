import React from 'react';
import { deleteTodo } from '../api/todoAPI';

const TodoItem = ({ todo, onDelete }) => {
    const handleDelete = async () => {
        await deleteTodo(todo._id);
        onDelete(todo._id);
    };

    return (
        <div>
            <span style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
                {todo.description}
            </span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default TodoItem;
