import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useLocation();
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    
    document.body.onscroll = () => {
        setIsScroll(window.scrollY !== 0);
    }

    return (
        <button title='Go Top' onClick={() => window.scrollTo(0, 0)} className={`scroll-top ${isScroll && 'show'}`}>
            <span className='fa fa-arrow-up'></span>
        </button>
    );
}

export default ScrollTop;