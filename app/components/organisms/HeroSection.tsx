// src/components/organisms/HeroSection/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { StatItem } from '../molecules/StatItem';

export const HeroSection: React.FC = () => {
    return (
        <div className="hero p-16">
            <div className="hero-content">
                {/* .hero-title debe tener el gradiente de style.css */}
                <h1 className="hero-title text-6xl">Bienvenido a Level-Up Gamer</h1>
                <p className="hero-subtitle text-lg">Tu destino definitivo para todo lo gaming. Sube de nivel con nosotros.</p>

                <div className="hero-stats flex gap-8 my-8">
                    <StatItem number="500+" label="Productos Gaming" />
                    <StatItem number="10K+" label="Gamers Satisfechos" />
                    <StatItem number="24/7" label="Soporte Gaming" />
                </div>

                <div className="hero-actions flex gap-4 mt-8">
                    <Link to="/catalogo">
                        <Button variant="primary">Explorar Catálogo</Button>
                    </Link>
                    <Link to="/registro">
                        <Button variant="outline">Únete Ahora</Button>
                    </Link>
                </div>
            </div>

            {/* Elementos visuales con la animación 'float' de style.css */}
            <div className="hero-visual">
                <div className="gaming-elements">
                    <i className="fas fa-gamepad gaming-icon"></i>
                    <i className="fas fa-trophy gaming-icon"></i>
                    <i className="fas fa-crown gaming-icon"></i>
                </div>
            </div>
        </div>
    );
};