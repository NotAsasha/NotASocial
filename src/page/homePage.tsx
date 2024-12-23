import NavBar from '../components/navBar'
import DataFetcher from '../components/test'
export default function HomePage() {
    return (
        <>
            <NavBar />
            <div className="main">
            <h1>Welcome on NotASocial</h1>
               
                <DataFetcher />
            </div>

        </>
    );
}