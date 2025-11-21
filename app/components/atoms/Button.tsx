import React from 'react';
// Importa el Link de React Router para usar el botón en rutas
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'outline';
    to?: string; // Para usar como enlace
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant,
                                                  to,
                                                  onClick,
                                                  className = ''
                                              }) => {
    const baseClasses = "btn inline-flex items-center justify-center px-6 py-3 rounded-[25px] text-center text-lg font-bold cursor-pointer transition-all duration-300";
    let variantClasses = '';

    if (variant === 'primary') {
        // Estilo: Gradiente Azul/Verde (clase definida en app.css)
        variantClasses = 'btn-primary text-black';
    } else { // 'outline'
        // Estilo: Borde Azul Eléctrico (clase definida en app.css)
        variantClasses = 'btn-outline border-2 text-[#1E90FF]';
    }

    if (to) {
        return (
            <Link to={to} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};