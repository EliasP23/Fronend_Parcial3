// src/components/molecules/StatItem/StatItem.tsx
import React from 'react';

interface StatItemProps {
    number: string;
    label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
    return (
        <div className="stat text-center">
            {/* .stat-number debe tener color #39FF14 y fuente Orbitron */}
            <div className="stat-number text-3xl font-extrabold">{number}</div>
            <div className="stat-label text-sm">{label}</div>
        </div>
    );
};