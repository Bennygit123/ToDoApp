import React, { useEffect, useState } from 'react';
import { fetchTodos, deleteTodo } from '../api/todoAPI';
import TodoItem from './TodoItem';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetchTodos();
            setTodos(res.data);
        };
        getTodos();
    }, []);

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default TodoList;
