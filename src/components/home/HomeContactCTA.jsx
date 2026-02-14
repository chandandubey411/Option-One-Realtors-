import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp } from '../common/Motion';

const HomeContactCTA = () => {
    return (
        <section className="pt-20 bg-primary relative overflow-hidden border-b-2">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="container mx-auto px-4 relative z-10 text-center">
                <FadeInUp>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">Ready to Find Your Dream Home?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Let's start the conversation. Our team is ready to guide you through every step of the real estate journey.
                    </p>
                    <Link to="/contact" className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4 shadow-2xl hover:-translate-y-1 transition-transform">
                        Talk to an Expert <ArrowRight size={20} />
                    </Link>
                </FadeInUp>
            </div>
        </section>
    );
};

export default HomeContactCTA;
