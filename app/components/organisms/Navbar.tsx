// En el mundo React, necesitarías un Context para el usuario y el carrito.
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// Supongamos que tienes un hook de contexto para el estado global
// import { useAuth } from '../../../context/AuthContext';
// import { useCart } from '../../../context/CartContext';

// Atom: NavLinkItem (para los elementos del menú)
const NavLinkItem = ({ to, children, className }) => (
    <li>
        <NavLink to={to} className={({ isActive }) =>
            `nav-menu-link ${isActive ? 'active' : ''} ${className || ''}`
        }>
            {children}
        </NavLink>
    </li>
);

// Molécula: UserMenuDropdown
const UserMenuDropdown = () => {
    // const { currentUser, logout } = useAuth();
    const currentUser = { username: 'duocgamer' }; // Simulación
    const logout = () => console.log('Logout logic here');

    return (
        <div id="userDropdown" className="user-dropdown">
            {currentUser ? (
                <div className="user-links" id="userLinks">
                    <NavLinkItem to="/perfil">Mi Perfil</NavLinkItem>
                    <a href="#" onClick={logout} id="logoutBtn">Cerrar Sesión</a>
                </div>
            ) : (
                <div className="auth-buttons" id="authButtons">
                    <NavLinkItem to="/login">Iniciar Sesión</NavLinkItem>
                    <NavLinkItem to="/registro">Registrarse</NavLinkItem>
                </div>
            )}
        </div>
    );
};

export const Navbar = () => {
    // const { totalItems } = useCart();
    const totalItems = 3; // Simulación
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = (e) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <i className="fas fa-gamepad"></i>
                    <span>Level-Up Gamer</span>
                </Link>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
                    <NavLinkItem to="/">Inicio</NavLinkItem>
                    <NavLinkItem to="/catalogo">Catálogo</NavLinkItem>
                    <NavLinkItem to="/eventos">Eventos</NavLinkItem>
                    <NavLinkItem to="/blog">Blog</NavLinkItem>
                    <NavLinkItem to="/carrito">
                        Carrito <span id="cartCounter" className="cart-counter">{totalItems}</span>
                    </NavLinkItem>

                    {/* User Menu - Implementado como parte del organismo Navbar */}
                    <li className={`user-menu ${isDropdownOpen ? 'active' : ''}`}>
                        <span id="userMenuToggle" className="user-toggle" onClick={toggleDropdown}>
                            <i className="fas fa-user"></i>
                            <span id="userDisplayName">Usuario</span> {/* Dinámico con Context */}
                        </span>
                        <UserMenuDropdown />
                    </li>
                </ul>

                <div className="nav-toggle" id="navToggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};