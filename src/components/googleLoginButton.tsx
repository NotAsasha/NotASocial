import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../AuthContext';

interface DecodedToken {
    email: string;
    sub: string;
    [key: string]: string | number | boolean | null | undefined;
}

function GoogleLoginButton() {
    const { setUser } = useAuth();
    const handleSubmit = async (credentialResponse : any) => {
        try {
            const decoded = jwtDecode<DecodedToken>(credentialResponse.credential);
            localStorage.setItem('email', decoded.email);
            localStorage.setItem('googleToken', decoded.sub);
            const response = await fetch("/api/googleLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(decoded),
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);

            setUser(data.user);
            console.log(data.message);
            window.location.reload();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className="loginButton">

            <GoogleLogin
                onSuccess={handleSubmit}
            />

        </div>
    )
}
export default GoogleLoginButton;