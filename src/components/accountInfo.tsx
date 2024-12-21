
function Info() {
    const email = localStorage.getItem('email');
    const googleToken = localStorage.getItem('googleToken');
    if (!googleToken) {
        console.log('Користувач не авторизований');
        return false;
    }
    return (
        <>
            <h1> Wow, ti avtorisovaniy </h1>
            <h2>{email} <br />{googleToken} </h2>
        </>
    )
}

export default Info;