import React, { useState } from 'react';

import './PostForm.css';

const PostForm = (props) => {
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
        props.onSavePost({
            ...state,
        });

        resetInput();
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