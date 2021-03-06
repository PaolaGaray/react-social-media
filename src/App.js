import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';

import Login from './components/Login';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import postReducer from './reducers/postReducer';

export const UserContext = createContext();
export const PostContext = createContext({
    posts: []
});

function App() {
    const initialPostState = useContext(PostContext);
    const [state, dispatch] = useReducer(postReducer, initialPostState);

    const [user, setUser] = useState('paola');

    useEffect(() => {
        document.title = user ? `${user}'s Feed` : "Please Login"
    }, [user])

    if(!user) {
        return <Login setUser={setUser} />
    }

    return (
        <PostContext.Provider value={{ state, dispatch }}>
        <UserContext.Provider value={user}>
            <Header  user={user} setUser={setUser}/>
            <CreatePost  user={user} />
            <PostList posts={state.posts}/>
        </UserContext.Provider>
        </PostContext.Provider>
    )
}

export default App;
