import React, { Component } from 'react';
import axios from "axios";
import PostList from '../PostList/PostList'
import PostForm from '../../components/PostForm/PostForm'

import './MainPage.css';

class MainPage extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('/posts.json').then(response => {
            if (response.data) {
                const postsReceived = Object.keys(response.data).map(key => ({
                    ...response.data[key],
                    id: key,
                }));

                this.setState({
                    posts: postsReceived
                })
            }
        });
    }

    onSavePost = (post) => {
        axios.post('/posts.json', post).then(response => {
            const newPost = {
                ...post,
                id: response.data.name
            };

            this.setState((currentState) => ({
                posts: [
                    ...currentState.posts,
                    newPost,
                ]
            }));
        });
    }

    onDelete = (id) => {
        axios.delete('/posts/' + id + '.json').then(response => {
            this.setState({
                posts: this.state.posts.filter(post => post.id !== id),
            });
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