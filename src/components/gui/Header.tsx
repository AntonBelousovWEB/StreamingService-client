import React from 'react';

export default function Header() {
    return (
        <header>
            <h1 className="title">Strimplex</h1>
            <div className="auth_header">
                <button className="login_button">Log In</button>
                <button className="join_button">Join</button>
            </div>
        </header>
    )
}