import React from 'react';

interface StatItemProps {
    number: string;
    label: string;
}

export const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
    return (
        <div className="stat text-center">
            {/* Las clases .stat-number y .stat-label son del CSS original */}
            <div className="stat-number text-3xl font-extrabold">{number}</div>
            <div className="stat-label text-sm text-[#D3D3D3]">{label}</div>
        </div>
    );
};