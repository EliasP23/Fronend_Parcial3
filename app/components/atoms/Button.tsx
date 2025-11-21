// src/components/atoms/Button/Button.tsx
import React from 'react';
// Asume que Tailwind CSS o clases de style.css están disponibles

interface ButtonProps {
    children: React.ReactNode;
    variant: 'primary' | 'outline'; // Corresponde a .btn-primary y .btn-outline
    onClick?: () => void;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  variant,
                                                  onClick,
                                                  className = ''
                                              }) => {
    // Estas clases deben replicar los estilos de tu style.css
    const baseClasses = "btn px-6 py-3 rounded-[25px] font-bold transition-all duration-300";
    let variantClasses = '';

    if (variant === 'primary') {
        // Estilo: Gradiente Azul/Verde
        variantClasses = 'btn-primary text-black';
    } else { // 'outline'
        // Estilo: Borde Azul Eléctrico
        variantClasses = 'btn-outline border-2 border-[#1E90FF] text-[#1E90FF]';
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