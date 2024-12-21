import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { googleLogout } from '@react-oauth/google';


function Login() {
    return (
        <div className="loginButton">
        <GoogleLogin 
                onSuccess={(credentialResponse) => {
                    if (credentialResponse?.credential) {
                        const decoded: any = jwtDecode(credentialResponse?.credential);
                        console.log(decoded);
                        localStorage.setItem('email', decoded.email);
                        localStorage.setItem('googleToken', decoded.sub);
                        window.location.reload();
                    } else {
                        console.error('No credential received');
                    }
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
            <button onClick={() => {
                googleLogout();
                console.log('Logged Out');
                localStorage.removeItem('email');
                localStorage.removeItem('googleToken');
                window.location.reload();
            }}> Logout
            </button>
        </div>
    )
}

export default Login;