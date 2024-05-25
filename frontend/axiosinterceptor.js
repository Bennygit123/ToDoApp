import axios from 'axios';

axios.interceptors.request.use(
    (config) => {
        // Add any headers, tokens, etc. here
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        // Handle response data
        return response;
    },
    (error) => {
        // Handle errors
        return Promise.reject(error);
    }
);

export default axios;
