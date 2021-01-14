import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Post from '../../components/Post/Post';
import * as actionType from '../../store/actions';

import './PostList.css';

const PostList = () => {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('/posts.json').then(response => {
            if (response.data) {
                const postsReceived = Object.keys(response.data).map(key => ({
                    ...response.data[key],
                    id: key,
                }));

                dispatch({type: actionType.LOAD_POSTS, posts: postsReceived});
            }
        });
    }, [dispatch]);

    const onDelete = (id) => {
        axios.delete('/posts/' + id + '.json').then(response => {
            dispatch({type: actionType.DELETE_POST, id});
        });
    }
    
    const postComponents = posts.map(post => (
        <Post key={post.id} data={post} onClick={onDelete}/>
    ));

    return (
        <div className="PostList">
            {postComponents}
        </div>
    );
};

export default PostList;