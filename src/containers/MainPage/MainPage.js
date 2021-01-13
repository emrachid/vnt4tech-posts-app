import React, { useEffect, useState } from 'react';
import axios from "axios";
import PostList from '../PostList/PostList'
import PostForm from '../../components/PostForm/PostForm'

import './MainPage.css';

const MainPage = () => {
    const [state, setState] = useState({
        posts: [],
    });

    useEffect(() => {
        axios.get('/posts.json').then(response => {
            if (response.data) {
                const postsReceived = Object.keys(response.data).map(key => ({
                    ...response.data[key],
                    id: key,
                }));

                setState({
                    posts: postsReceived
                })
            }
        });
    }, []);

    const onSavePost = (post) => {
        axios.post('/posts.json', post).then(response => {
            const newPost = {
                ...post,
                id: response.data.name
            };

            setState((currentState) => ({
                posts: [
                    ...currentState.posts,
                    newPost,
                ]
            }));
        });
    }

    const onDelete = (id) => {
        axios.delete('/posts/' + id + '.json').then(response => {
            setState({
                posts: state.posts.filter(post => post.id !== id),
            });
        });
    }

    return (
        <div className="MainPage">
            <section>
                <PostForm onSavePost={onSavePost} />
            </section>
            <section>
                <PostList posts={state.posts} onDelete={onDelete}/>
            </section>
        </div>
    );
}

export default MainPage;