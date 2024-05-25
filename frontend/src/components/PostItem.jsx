import React from 'react';
import { deletePost } from '../api/postAPI';

const PostItem = ({ post, onDelete }) => {
    const handleDelete = async () => {
        await deletePost(post._id);
        onDelete(post._id);
    };

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default PostItem;
