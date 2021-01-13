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
        axios.get('https://my-todo-list-15256-default-rtdb.firebaseio.com/posts.json').then(response => {
            if (response.status === 200) {
                if (response.data) {
                    const postsReceived = Object.keys(response.data).map(key => ({
                        ...response.data[key],
                        id: key,
                    }));

                    this.setState({
                        posts: postsReceived
                    })
                }
            } else {
                alert('Ops!!! Something wrong happened\n\n Server status: ' + response.status);
            }
        }).catch(error => {
            alert('Ops!!! Something wrong happened\n\n' + error);
        });
    }

    onSavePost = (post) => {
        axios.post('https://my-todo-list-15256-default-rtdb.firebaseio.com/posts.json', post).then(response => {
            if (response.status === 200) {
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
            } else {
                alert('Ops!!! Something wrong happened\n\n Server status: ' + response.status);
            }
        }).catch(error => {
            alert('Ops!!! Something wrong happened\n\n' + error);
        });
    }

    onDelete = (id) => {
        axios.delete('https://my-todo-list-15256-default-rtdb.firebaseio.com/posts/' + id + '.json').then(response => {
            if (response.status === 200) {
                this.setState({
                    posts: this.state.posts.filter(post => post.id !== id),
                });
            } else {
                alert('Ops!!! Something wrong happened\n\n Server status: ' + response.status);
            }
        }).catch(error => {
            alert('Ops!!! Something wrong happened\n\n' + error);
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