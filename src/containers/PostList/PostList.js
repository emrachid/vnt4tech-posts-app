import React from 'react';
import Post from '../../components/Post/Post';

import './PostList.css';

const PostList = (props) => {

    const deletePostHandler = (id) => {
        props.onDelete(id)
    }
    
    const posts = props.posts.map(post => (
        <Post key={post.id} data={post} onClick={deletePostHandler}/>
    ));

    return (
        <div className="PostList">
            {posts}
        </div>
    );
};

export default PostList;