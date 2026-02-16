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
                <div>&copy; {new Date().getFullYear()} <Link to="/">Balakrishnan</Link>. All Rights Reserved.</div>
            </footer>
        </div>
    );
}


export default MainLayout;
