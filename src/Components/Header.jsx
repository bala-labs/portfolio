import { NavLink } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <h2>Bala | Dev</h2>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
            </nav>
            <div className='menu-bar'>
                <button className="toggle-menu" onClick={handleMenuClick}><span className='fa fa-bars'></span></button>
                {isOpen && <div className='navbar' ref={navRef}>
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                </div>}
            </div>
        </header>
    );
}

export default Header;