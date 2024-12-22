import './App.css'
import RegisterPage from './page/registerPage'
import LoginPage from './page/loginPage'
import HomePage from './page/homePage'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Routes>
            </AuthProvider>
        </>
    )
}

export default App
