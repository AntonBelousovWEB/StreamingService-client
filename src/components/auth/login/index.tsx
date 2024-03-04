import React, { useState } from 'react';
import { LOGIN_USER } from '../../../server/mutations/User';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user } = React.useContext(AuthContext);
    const [logUser] = useMutation(LOGIN_USER);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(user) {
          navigate('/')
        }
    }, [user, navigate])

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
            login(data.loginUser);
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