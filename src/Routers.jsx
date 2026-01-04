import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './Utils/ErrorBoundary'
import LoadingScreen from './Components/LoadingScreen'

const Routers = () => {

    const MainLayout = lazy(() => import("./Layout/MainLayout"));
    const Home = lazy(() => import("./Pages/Home"));
    const About = lazy(() => import("./Pages/About"));
    const Contact = lazy(() => import("./Pages/Contact"));
    const ScrollTop = lazy(() => import("./Components/ScrollTop"))

    return (
        <ErrorBoundary>
            <Suspense fallback={<LoadingScreen />}>
                <ScrollTop />
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<Home />}/>
                        <Route path='about' element={<About />}/>
                        <Route path='contact' element={<Contact />}/>
                    </Route>
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
}

export default Routers;