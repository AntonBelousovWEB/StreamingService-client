import React from 'react';

export default function Header() {
    return (
        <header>
            <h1 className="title"><a href="/">Strimplex</a></h1>
            <div className="auth_header">
                <button className="login_button"><a href="/login/">Log In</a></button>
                <button className="join_button"><a href="/register/">Join</a></button>
            </div>
        </header>
    )
}