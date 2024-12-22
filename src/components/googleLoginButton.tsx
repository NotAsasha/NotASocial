import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


export default function GoogleLoginButton() {
    return (
        <div className="loginButton">

        <GoogleLogin 
                onSuccess={(credentialResponse) => {
                    if (credentialResponse?.credential) {
                        // Fix after connecting to DB

                        const decoded = jwtDecode<any>(credentialResponse.credential);
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

        </div>
    )
}