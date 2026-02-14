import React from 'react';
import { FadeInUp } from '../common/Motion';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Modern Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <FadeInUp className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <span className="block text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Who We Are
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                    Building Legacies, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                        Not Just Homes
                    </span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Your most trusted partner in Greater Noida and Ghaziabad's real estate landscape. We turn your property dreams into reality with transparency and expertise.
                </p>
            </FadeInUp>
        </section>
    );
};

export default AboutHero;
