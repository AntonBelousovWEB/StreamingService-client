import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import person from './img/person.svg'

export default function Header() {
    const { user } = useContext(AuthContext);

    return (
        <header>
            <Link className="title" to={'/'}>Strimplex</Link>
            {user ? (
                <Link 
                    className='profile_circle' 
                    to={'/profile'}>
                        <img 
                            className='photo_user' 
                            src={person}
                            alt="" 
                        />
                </Link>
            ) : (
                <div className="auth_header">
                    <Link className="login_button" to={'/login'}>Log In</Link>
                    <Link className="join_button" to={'/join'}>Join</Link>
                </div>
            )}
            
        </header>
    )
}