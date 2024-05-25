import React, { useState } from 'react';
import { addPost } from '../api/postAPI';

const AddPost = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content };
        const res = await addPost(newPost);
        onAdd(res.data);
        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Post Content"
            />
            <button type="submit">Add Post</button>
        </form>
    );
};

export default AddPost;
