// src/components/molecules/FeatureCard/FeatureCard.tsx
import React from 'react';

interface FeatureCardProps {
    icon: string; // Ej: "fas fa-star"
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        // Las clases replican .feature-card con borde azul eléctrico y hover
        <div className="feature-card border border-[#1E90FF] rounded-xl p-8 text-center transition-transform hover:translate-y-[-10px]">
            {/* Icono debe ser Azul Eléctrico */}
            <i className={`${icon} text-5xl mb-4 text-[#1E90FF]`}></i>
            <h3 className="text-xl mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
};