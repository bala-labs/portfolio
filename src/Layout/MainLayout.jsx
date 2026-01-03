import { Outlet } from 'react-router-dom'
import Header from '../Components/Header';

const MainLayout = () => {

    return (
        <div>
            <Header />

            <main>
                <Outlet />
            </main>

            <footer>
                <div>&copy; Copyright 2025 All Rights Reserved | Designed By Bala</div>
            </footer>
        </div>
    );
}

export default MainLayout;