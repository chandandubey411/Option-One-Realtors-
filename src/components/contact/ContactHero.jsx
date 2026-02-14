import React from 'react';
import { FadeInUp } from '../common/Motion';

const ContactHero = () => {
    return (
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Contact Us"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <FadeInUp className="relative z-10 text-center px-4 max-w-4xl mx-auto md:mt-8">
                <span className="block text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                    Get in Touch
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading leading-tight">
                    Let's Discuss <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                        Your Real Estate Goals
                    </span>
                </h1>
            </FadeInUp>
        </section>
    );
};

export default ContactHero;
