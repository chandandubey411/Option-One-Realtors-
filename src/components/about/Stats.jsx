import React from 'react';
import { StaggerContainer, StaggerItem } from '../common/Motion';

const StatItem = ({ number, label }) => (
    <StaggerItem className="text-center p-6">
        <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">{number}</div>
        <div className="text-secondary font-medium tracking-wider uppercase text-sm">{label}</div>
    </StaggerItem>
);

const Stats = () => {
    return (
        <section className="py-16 bg-primary relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                    <StatItem number="12+" label="Years Experience" />
                    <StatItem number="800+" label="Happy Families" />
                    <StatItem number="50+" label="Verified Projects" />
                    <StatItem number="100%" label="Transparency" />
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Stats;
