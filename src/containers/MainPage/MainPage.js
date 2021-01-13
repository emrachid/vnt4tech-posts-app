import React, { Component } from 'react';
import PostList from '../PostList/PostList'
import PostForm from '../../components/PostForm/PostForm'

import './MainPage.css';

class MainPage extends Component {
    state = {
        posts: [],
    }

    onSavePost = (post) => {
        this.setState((currentState) => ({
            posts: [
                ...currentState.posts,
                post
            ]
        }));
    }

    onDelete = (id) => {
        this.setState({
            posts: this.state.posts.filter(post => post.id !== id)
        });
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