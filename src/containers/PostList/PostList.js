import React, { Component } from 'react';
import Post from '../../components/Post/Post';

import './PostList.css';

class PostList extends Component {

    deletePostHandler = (id) => {
        this.props.onDelete(id)
    }
    
    render() {
        const posts = this.props.posts.map(post => (
            <Post key={post.id} data={post} onClick={this.deletePostHandler}/>
        ));

        return (
            <div className="PostList">
                {posts}
            </div>
        );
    }
};

export default PostList;