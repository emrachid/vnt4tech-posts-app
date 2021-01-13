import React, { Component } from 'react';
import uniqid from 'uniqid';

import './PostForm.css';

class PostForm extends Component {
    state = {
        title: '',
        content: '',
    };

    resetInput = () => {
        this.setState({
            title: '',
            content: '',
        });
    }

    savePostHandler = () => {
        this.props.onSavePost({
            ...this.state,
            id: uniqid()
        });

        this.resetInput();
    }

    render() {
        return (
            <div className="PostForm">
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick={this.savePostHandler}>Save</button>
            </div>
        );
    }
}

export default PostForm;