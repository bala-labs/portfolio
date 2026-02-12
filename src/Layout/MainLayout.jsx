import { Outlet, Link } from 'react-router-dom'
import Header from '../Components/Header';

const MainLayout = () => {

    return (
        <div className='app'>
            <Header />

            <main>
                <Outlet />
            </main>

            <footer>
                <div>&copy; {new Date().getFullYear()} All Rights Reserved | Designed By <Link to="/">Bala</Link></div>
            </footer>
        </div>
    );
}


export default MainLayout;
