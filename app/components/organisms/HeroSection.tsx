import React from 'react';
// 🚨 Importaciones relativas ajustadas
import { Button } from '../atoms/Button';
import { StatItem } from '../molecules/StatItem';

export const HeroSection: React.FC = () => {
    return (
        <div className="hero grid grid-cols-1 md:grid-cols-2 gap-16 items-center min-h-[90vh] py-8">
            <div className="hero-content p-4 text-center md:text-left">
                {/* .hero-title obtiene el degradado del CSS */}
                <h1 className="hero-title text-6xl font-black mb-4">
                    Bienvenido a Level-Up Gamer
                </h1>
                <p className="hero-subtitle text-lg text-[#D3D3D3] mb-8">
                    Tu destino definitivo para todo lo gaming. Sube de nivel con nosotros.
                </p>

                <div className="hero-stats flex gap-8 my-8 justify-center md:justify-start">
                    <StatItem number="500+" label="Productos Gaming" />
                    <StatItem number="10K+" label="Gamers Satisfechos" />
                    <StatItem number="24/7" label="Soporte Gaming" />
                </div>

                <div className="hero-actions flex gap-4 mt-8 justify-center md:justify-start">
                    <Button variant="primary" to="/catalogo">Explorar Catálogo</Button>
                    <Button variant="outline" to="/registro">Únete Ahora</Button>
                </div>
            </div>

            <div className="hero-visual flex justify-center items-center">
                {/* Íconos con animaciones CSS (clase gaming-icon definida en app.css) */}
                <div className="gaming-elements flex flex-col gap-8 items-center">
                    <i className="fas fa-gamepad gaming-icon text-8xl"></i>
                    <i className="fas fa-trophy gaming-icon text-7xl"></i>
                    <i className="fas fa-crown gaming-icon text-8xl"></i>
                </div>
            </div>
        </div>
    );
};