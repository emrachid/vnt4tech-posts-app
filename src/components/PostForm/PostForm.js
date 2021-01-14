import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios";
import * as actionType from '../../store/actions';

import './PostForm.css';

const PostForm = () => {
    const dispacth = useDispatch();

    const [state, setState] = useState({
        title: '',
        content: '',
    });

    const resetInput = () => {
        setState({
            title: '',
            content: '',
        });
    }

    const savePostHandler = () => {
        onSavePost({
            ...state,
        });

        resetInput();
    }

    const onSavePost = (post) => {
        axios.post('/posts.json', post).then(response => {
            const newPost = {
                ...post,
                id: response.data.name
            };

            dispacth({type: actionType.CREATE_POST, post: newPost});
        });
    }

    return (
        <div className="PostForm">
            <label>Title</label>
            <input type="text" value={state.title} onChange={(event) => setState({...state, title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={state.content} onChange={(event) => setState({...state, content: event.target.value})} />
            <button onClick={savePostHandler}>Save</button>
        </div>
    );
}

export default PostForm;