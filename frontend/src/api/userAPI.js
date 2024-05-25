import axios from 'axios';

const API_URL = '/api/users'; // Adjust according to your backend API endpoint

// Function to register a new user
export const registerUser = async (newUser) => {
    try {
        const response = await axios.post(API_URL, newUser);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error; // Throw error to handle it in components
    }
};
