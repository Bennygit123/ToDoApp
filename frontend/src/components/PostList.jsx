import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/postAPI';
import PostItem from './PostItem';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const res = await fetchPosts();
            setPosts(res.data);
        };
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts(posts.filter((post) => post._id !== id));
    };

    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post._id} post={post} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default PostList;
