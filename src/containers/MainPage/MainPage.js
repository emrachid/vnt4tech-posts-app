import React, { Component } from 'react';
import PostList from '../PostList/PostList'
import PostForm from '../../components/PostForm/PostForm'

import './MainPage.css';

class MainPage extends Component {
    state = {
        posts: [],
    }

    onSavePost = (post) => {
        // TODO: Add new post into component state. Tip: use "this.setState()".
    }

    onDelete = (id) => {
        // TODO: Delete post from component state. Tip: use "this.setState()".
    }

    render() {
        return (
        <div className="MainPage">
            <section>
                <PostForm onSavePost={this.onSavePost} />
            </section>
            <section>
                <PostList posts={this.state.posts} onDelete={this.onDelete}/>
            </section>
        </div>
        );
    }
}

export default MainPage;