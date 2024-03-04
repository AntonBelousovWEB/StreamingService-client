import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <h1 className="title">Strimplex</h1>
            <div className="auth_header">
                <Link className="login_button" to={'/login'}>Log In</Link>
                <Link className="join_button" to={'/join'}>Join</Link>
            </div>
        </header>
    )
}