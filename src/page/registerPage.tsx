import NavBar from '../components/navBar'
import Info from '../components/accountInfo'
import Register from '../components/register'
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <NavBar />
            <div className="main">
                <Info />
                <Register />
            </div>
            <Link to="/login"><button>Login</button></Link>
            
        </>
    );
}