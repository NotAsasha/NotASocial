import './App.css'
import RegisterPage from './page/registerPage';
import LoginPage from './page/loginPage';
import HomePage from './page/homePage';
import ProfilePage from './page/profilePage';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './privateRoute';

function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route
                        path="profile"
                        element={<PrivateRoute element={<ProfilePage />} />}
                    />
                </Routes>
            </AuthProvider>
        </>
    );
}

export default App;
