import React, { useState } from 'react';
import { addTodo } from '../api/todoAPI';

const AddTodo = ({ onAdd }) => {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('ongoing');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTodo = { description, status };
        const res = await addTodo(newTodo);
        onAdd(res.data);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;
