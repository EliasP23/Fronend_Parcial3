import React from 'react';

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        // Clase .feature-card definida en app.css
        <div className="feature-card rounded-xl p-8 text-center transition-transform hover:translate-y-[-10px]">
            {/* Icono con color Azul Eléctrico (#1E90FF) */}
            <i className={`${icon} text-5xl mb-4 text-[#1E90FF]`}></i>
            <h3 className="text-xl mb-2">{title}</h3>
            <p className="text-[#D3D3D3]">{description}</p>
        </div>
    );
};