import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target) && !document.querySelector('.toggle-menu').contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <Link to="/" className="brand-logo-link" aria-label="Balakrishnan">
                <img
                    src="/assets/logo.png"
                    alt="Balakrishnan"
                    className="brand-logo-img"
                />
            </Link>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </nav>
            <div className='menu-bar'>
                <button className="toggle-menu" onClick={handleMenuClick} aria-label="Toggle navigation menu">
                    <span className='fa fa-bars'></span>
                </button>
                {isOpen && <div className='navbar' ref={navRef}>
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>}
            </div>
        </header>
    );
};

export default Header;