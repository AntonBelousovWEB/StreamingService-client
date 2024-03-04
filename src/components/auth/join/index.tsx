import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { REGISTER_USER } from '../../../server/mutations/User';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { login, user } = React.useContext(AuthContext);
    const [regUser] = useMutation(REGISTER_USER);
    const navigate = useNavigate();

    React.useEffect(() => {
        if(user) {
          navigate('/')
        }
    }, [user, navigate])

    const Register = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        regUser({
            variables: {
                registerUserInput: {
                    email,
                    name,
                    password,
                }
            }
        }).then(({ data }) => {
            localStorage.setItem("token", data.registerUser.tokenJWT);
            login(data.registerUser);
            navigate("/");
        })
    }

    return (
        <form className="auth_form" onSubmit={(e) => Register(e)}>
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