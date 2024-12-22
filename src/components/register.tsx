import GoogleLoginButton from '../components/googleLoginButton'
import { useState } from "react";
import { useAuth } from '../AuthContext';

export default function Register() {
    const { setUser } = useAuth();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            localStorage.setItem('token', data.token);
            setUser(data.user);
            console.log(data.message);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <>
            <div className="registerBox">
                <form onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <br />
                    <div>
                        <h3>Username: </h3>
                        <input
                            type="text"
                            name="username"
                            placeholder="Your unique username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <h3>E-mail: </h3>
                        <input
                            type="email"
                            name="email"
                            placeholder="No, we will not spam ads"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <h3>Password: </h3>
                        <input
                            type="password"
                            name="password"
                            placeholder="We do not care"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div> </div>
                    <hr />
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
                <GoogleLoginButton />
            </div>
        </>
    );
}