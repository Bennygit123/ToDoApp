import axios from 'axios';

const API_URL = '/api/todos'; // Adjust according to your backend API endpoint

// Function to fetch all todos
export const fetchTodos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error; // Throw error to handle it in components
    }
};

// Function to add a new todo
export const addTodo = async (newTodo) => {
    try {
        const response = await axios.post(API_URL, newTodo);
        return response.data;
    } catch (error) {
        console.error('Error adding todo:', error);
        throw error; // Throw error to handle it in components
    }
};

// Function to delete a todo
export const deleteTodo = async (todoId) => {
    try {
        const response = await axios.delete(`${API_URL}/${todoId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting todo:', error);
        throw error; // Throw error to handle it in components
    }
};
