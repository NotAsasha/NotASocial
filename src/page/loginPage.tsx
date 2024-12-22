import NavBar from '../components/navBar'
import Info from '../components/accountInfo'
import Login from '../components/login'
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <div className="main">
                <Info />
                <Login />
            </div>
            <Link to="/register"><button>Register</button></Link>
            
        </>
    );
}