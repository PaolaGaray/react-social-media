import React, { useState, useEffect } from 'react';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export default function App() {
    const [user, setUser] = useState('paola');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login"
    }, [user])

    if(!user) {
        return <Login setUser={setUser} />
    }

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <CreatePost user={user} setPosts={setPosts} posts={posts}/>
            <PostList posts={posts}/>
        </>
    )
}
