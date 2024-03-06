import React, { createContext, useReducer } from 'react';
import { jwtDecode } from 'jwt-decode';

interface User {
    name: string;
    email: string;
    streamKey: string;
}

interface InitialState {
    user: User | null;
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: InitialState = {
    user: null
};

if (localStorage.getItem('token')) {
    try {
        const decodedToken: any = jwtDecode(localStorage.getItem('token')!);
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
        } else {
            initialState.user = decodedToken;
        }
    } catch (err) {
        console.log(err);
    }
}

const AuthContext = createContext<{
    user: User | null;
    login: (userData: { tokenJWT: string }) => void;
    logout: () => void;
}>({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function authReducer(state: InitialState, action: Action): InitialState {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null
            };
        default:
            return state;
    }
}

function AuthProvider(props: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData: { tokenJWT: string }) => {
        localStorage.setItem('token', userData.tokenJWT);
        dispatch({
            type: 'LOGIN',
            payload: jwtDecode(userData.tokenJWT)
        });
    };

    function logout() {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <AuthContext.Provider value={{ user: state.user, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };