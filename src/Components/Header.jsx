import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext';
import { useContext, useEffect, useState, useRef } from 'react';

const Header = () => {
    const {state, dispatch} = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    const handleClick = () => {
        dispatch({type: state.theme === "light" ? "dark" : "light"});
        localStorage.setItem('theme', state.theme === "light" ? "dark" : "light");
    }

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

    useEffect(() => {
        document.body.setAttribute("data-theme", state.theme);
    }, [state.theme]);

    return (
        <header>
            <h1>PortFolio</h1>
            <nav>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                <span className={state.theme === "light" ? 'fas fa-moon mode-icon' : 'fas fa-sun mode-icon'} onClick={handleClick}></span>
            </nav>
            <div className='menu-bar'>
                <button className="toggle-menu" onClick={handleMenuClick}><span className='fa fa-bars'></span></button>
                {isOpen && <div className='navbar' ref={navRef}>
                    <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    <NavLink to="about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                    <NavLink to="contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
                    <span onClick={() => { handleClick(); setIsOpen(false)}}>{state.theme === "light" ? 'Dark Mode' : 'Light Mode'}</span>
                </div>}
            </div>
        </header>
    );
}

export default Header;