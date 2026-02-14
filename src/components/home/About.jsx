import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { FadeInUp } from '../common/Motion';
import { siteConfig } from '../../config/siteConfig';

const About = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Side */}
                    <FadeInUp className="w-full lg:w-1/2 relative" delay={0.2}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Team"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-secondary p-8 rounded-tl-3xl rounded-br-3xl hidden md:block">
                                <p className="text-white font-bold text-4xl mb-1">15+</p>
                                <p className="text-primary font-medium">Years of<br />Trust</p>
                            </div>
                        </div>
                        {/* Decorative dot pattern */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 -z-10"></div>
                    </FadeInUp>

                    {/* Content Side */}
                    <FadeInUp className="w-full lg:w-1/2" delay={0.4}>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                            Redefining Real Estate with <span className="text-primary">Integrity</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {siteConfig.brandName} is not just a consultancy; we are your partners in finding the perfect space. founded with a vision to bring transparency and professionalism to the regional real estate market.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-secondary" size={20} />
                                <span className="font-medium text-gray-700">RERA Registered</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-secondary" size={20} />
                                <span className="font-medium text-gray-700">Verified Listings</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-secondary" size={20} />
                                <span className="font-medium text-gray-700">Zero Hidden Charges</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-secondary" size={20} />
                                <span className="font-medium text-gray-700">End-to-End Support</span>
                            </div>
                        </div>

                        <Link to="/about" className="btn-outline inline-flex items-center gap-2 group">
                            Read Our Story <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

export default About;
