import { Link } from 'react-router-dom';
import './navBar.css'
export default function NavBar() {
    const token = localStorage.getItem('token');

    const authLink = token ? (
        <li><Link to="/profile">{token}</Link></li>
    ) : (
        <li><Link to="/register">Sign Up</Link></li>
    );

    return (
        <div className="navTab">
            <Link to="/" className="logo">Home</Link>
            <ul>
                <li>{authLink}</li>
            </ul>
        </div>
    );
}