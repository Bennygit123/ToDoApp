import axios from 'axios';

const API_URL = '/api/posts'; // Adjust according to your backend API endpoint

// Function to fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error; // Throw error to handle it in components
    }
};

// Function to add a new post
export const addPost = async (newPost) => {
    try {
        const response = await axios.post(API_URL, newPost);
        return response.data;
    } catch (error) {
        console.error('Error adding post:', error);
        throw error; // Throw error to handle it in components
    }
};

// Function to delete a post
export const deletePost = async (postId) => {
    try {
        const response = await axios.delete(`${API_URL}/${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error; // Throw error to handle it in components
    }
};
