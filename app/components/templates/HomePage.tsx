// ~/components/templates/HomePage/HomePage.tsx

import React from 'react';
import { HeroSection } from '~/components/organisms/HeroSection';
import { FeaturesSection } from '~/components/organisms/FeaturesSection';

export const HomePage: React.FC = () => {
    return (
        // Esta es la sección #home del HTML original
        <section id="home" className="section active">
            <div className="container mx-auto px-4">
                <HeroSection />
            </div>
            {/* FeaturesSection va fuera del container si es full-width, como en el original */}
            <FeaturesSection />
        </section>
    );
};