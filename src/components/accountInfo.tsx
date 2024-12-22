import { googleLogout } from '@react-oauth/google';

function Info() {
    const email = localStorage.getItem('email');
    const googleToken = localStorage.getItem('googleToken');
    if (!email) {
        console.log('Користувач не авторизований');
        return false;
    }
    return (
        <>
            <h1> Wow, ti avtorisovaniy </h1>
            <h2>{email} <br />{googleToken} </h2>
            <button onClick={() => {
                googleLogout();
                console.log('Logged Out');
                localStorage.removeItem('email');
                localStorage.removeItem('googleToken');
                window.location.reload();
            }}> Logout
            </button>
        </>
    )
}

export default Info;