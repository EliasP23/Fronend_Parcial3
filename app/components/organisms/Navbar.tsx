// src/components/organisms/Navbar/Navbar.tsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// Molécula/Átomo: NavLinkItem
const NavLinkItem = ({ to, children }) => (
    <li>
        <NavLink to={to} className={({ isActive }) =>
            `nav-menu-link ${isActive ? 'active' : ''}` // 'active' aplica el estilo de style.css
        }>
            {children}
        </NavLink>
    </li>
);

export const Navbar = () => {
    const totalItems = 0; // Se integrará con Context
    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // Para móvil

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <i className="fas fa-gamepad"></i>
                    <span>Level-Up Gamer</span>
                </Link>

                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <NavLinkItem to="/">Inicio</NavLinkItem>
                    <NavLinkItem to="/catalogo">Catálogo</NavLinkItem>
                    <NavLinkItem to="/carrito">
                        Carrito <span id="cartCounter" className="cart-counter">{totalItems}</span>
                    </NavLinkItem>
                    <NavLinkItem to="/perfil">Perfil</NavLinkItem>
                    {/* El dropdown de login/registro se maneja dentro de este organismo o en su propio componente */}
                    <li className="user-menu">
                        {/* Esto es un placeholder para el futuro UserMenuDropdown */}
                        <NavLinkItem to="/login">Login</NavLinkItem>
                    </li>
                </ul>

                <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {/* Icono de hamburguesa */}
                </div>
            </div>
        </nav>
    );
};