import React, { useState } from 'react';
import { LOGIN_USER } from '../../../server/mutations/User';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [logUser] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    const Login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        logUser({
            variables: {
                registerUserInput: {
                    email,
                    password,
                }
            }
        }).then(({ data }) => {
            localStorage.setItem("token", data.loginUser.tokenJWT);
            navigate("/");
        })
    }

    return (
        <form className="auth_form" onSubmit={(e) => Login(e)}>
            <h1 className="title_form">Log In</h1>
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
            <button type="submit" className="auth_button">Login</button>
        </form>
    )
}