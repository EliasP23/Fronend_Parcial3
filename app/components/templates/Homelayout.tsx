import React from 'react';
import { HeroSection } from '../organisms/HeroSection';
import { FeaturesSection } from '../organisms/FeaturesSection';

// El componente en sí
const Homelayout: React.FC = () => {
    return (
        // Contenido de la plantilla
        <section id="home" className="section active">
            <div className="container mx-auto px-4">
                <HeroSection />
            </div>
            <FeaturesSection />
        </section>
    );
};

// 🚨 Exportación por defecto para asegurar la carga en el Router
export default Homelayout;
