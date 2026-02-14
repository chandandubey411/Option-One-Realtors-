import React from 'react';
import { Users, Clock, Home, Award } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../common/Motion';

const StatsPreview = () => {
    const stats = [
        { icon: Clock, value: "15+", label: "Years Experience" },
        { icon: Users, value: "2000+", label: "Happy Clients" },
        { icon: Home, value: "500+", label: "Properties Sold" },
        { icon: Award, value: "25+", label: "Awards Won" }
    ];

    return (
        <section className="py-12 bg-primary text-white -mt-20 relative z-20 container mx-auto px-4 rounded-xl shadow-2xl overflow-hidden">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {stats.map((stat, index) => (
                    <StaggerItem key={index} className="text-center group hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                            <stat.icon size={30} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2 font-heading">{stat.value}</h3>
                        <p className="text-gray-300 text-sm uppercase tracking-wider font-medium">{stat.label}</p>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
};

export default StatsPreview;
