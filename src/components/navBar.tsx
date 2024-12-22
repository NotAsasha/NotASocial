import { Link } from 'react-router-dom';
import './navBar.css'
export default function NavBar() {
    const email = localStorage.getItem('email');

    const authLink = email ? (
        <li><Link to="/profile">{email}</Link></li>
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