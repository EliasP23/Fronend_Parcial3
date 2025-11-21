import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// ---------------------------
// TYPES
// ---------------------------
interface NavLinkItemProps {
    to: string;
    children: React.ReactNode;
    className?: string;
}

interface UserMenuDropdownProps {
    // Aquí se usaría el contexto de autenticación
    currentUser: { username: string } | null;
    logout: () => void;
}

// ---------------------------
// ATOMS & MOLECULES (Internal)
// ---------------------------

// Atom: NavLinkItem (Componente funcional con tipado explícito)
const NavLinkItem = ({ to, children, className }: NavLinkItemProps) => (
    <li>
        <NavLink
            to={to}
            className={({ isActive }: { isActive: boolean }) =>
                `nav-menu-link ${isActive ? 'active' : ''} ${className || ''}`
            }
        >
            {children}
        </NavLink>
    </li>
);

// Molécula: UserMenuDropdown
const UserMenuDropdown: React.FC<UserMenuDropdownProps> = ({ currentUser, logout }) => {
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

// ---------------------------
// ORGANISM (MAIN EXPORT)
// ---------------------------

// 🚨 ESTA LÍNEA RESUELVE EL ERROR TS2305
export const Navbar = () => {
    // Simulación de estado global (se debe reemplazar por Context/Zustand)
    const currentUser = { username: 'eliasgamer' }; // Simulación de usuario logueado
    const totalItems = 3;
    const logout = () => console.log('Simulating Logout');

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar fixed top-0 w-full z-10">
            <div className="nav-container container mx-auto">
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

                    <li className={`user-menu ${isDropdownOpen ? 'active' : ''}`}>
                        <span id="userMenuToggle" className="user-toggle" onClick={toggleDropdown}>
                            <i className="fas fa-user"></i>
                            <span id="userDisplayName">{currentUser.username}</span>
                        </span>
                        <UserMenuDropdown currentUser={currentUser} logout={logout} />
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