import React from 'react';
import { FadeInUp } from '../common/Motion';

const ServicesHero = () => {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Real Estate Services"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Content */}
            <FadeInUp className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <span className="block text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    What We Do
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading leading-tight">
                    Comprehensive <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                        Real Estate Solutions
                    </span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    From finding your dream home to securing the best mortgage deals, we guide you through every step of your property journey.
                </p>
            </FadeInUp>
        </section>
    );
};

export default ServicesHero;
