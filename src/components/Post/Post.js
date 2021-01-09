import React from 'react';
import './Post.css';

const Post = (props) => (
    <article className="Post">
        <h1>{props.data.title}</h1>
        <div className="Body">{props.data.content}</div>
        <button onClick={() => props.onClick(props.data.id)}>Delete</button>
    </article>
);

export default Post;