// src/components/organisms/FeaturesSection/FeaturesSection.tsx
import React from 'react';
import { FeatureCard } from '../molecules/FeatureCard';
export const FeaturesSection: React.FC = () => {
    return (
        <div className="features-section p-16">
            <div className="container mx-auto">
                <h2 className="text-center mb-12 text-4xl">¿Por qué elegir Level-Up Gamer?</h2>
                <div className="features-grid grid grid-cols-3 gap-8">
                    <FeatureCard
                        icon="fas fa-star"
                        title="Sistema Level-Up"
                        description="Gana puntos con cada compra y sube de nivel para obtener descuentos exclusivos"
                    />
                    <FeatureCard
                        icon="fas fa-graduation-cap"
                        title="Descuento DUOC"
                        description="Estudiantes DUOC obtienen 20% de descuento permanente en todos los productos"
                    />
                    <FeatureCard
                        icon="fas fa-users"
                        title="Programa Referidos"
                        description="Invita amigos y gana puntos Level-Up por cada registro exitoso"
                    />
                </div>
            </div>
        </div>
    );
};