import React, { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    return (
        <form className="auth_form">
            {/* {message && <p>{message}</p>} */}
            <h1 className="title_form">Register</h1>
            <div className="auth-form_input">
                <h1>Email:</h1>
                <input
                    className="auth_input" 
                    placeholder="Enter the Email" 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="auth-form_input">
                <h1>Password:</h1>
                <input 
                    className="auth_input" 
                    placeholder="Enter the Password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="auth-form_input">
                <h1>Name:</h1>
                <input 
                    className="auth_input" 
                    placeholder="Enter the Name" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <button type="submit" className="auth_button">Join</button>
        </form>
    )
}