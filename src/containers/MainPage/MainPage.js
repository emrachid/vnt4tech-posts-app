import React from 'react';
import PostList from '../PostList/PostList'
import PostForm from '../../components/PostForm/PostForm'

import './MainPage.css';

const MainPage = () => (
    <div className="MainPage">
        <section>
            <PostForm />
        </section>
        <section>
            <PostList />
        </section>
    </div>
);

export default MainPage;