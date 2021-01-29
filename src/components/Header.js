import React from 'react'

export default function Header({ user, setUser }) {
    return (
        <div>
            Welcome, {user}!
            <button onClick={() => setUser("")}>logout</button>
        </div>
    )
}
