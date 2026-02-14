import React, { Suspense } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp, StaggerContainer, StaggerItem, Parallax } from '../common/Motion';
import hero from '../../assets/images/hero.png'
import Building3D from './Building3D';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-start lg:items-center bg-gray-900 pt-36 md:pt-40 lg:pt-0 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Parallax offset={50} className="w-full h-full">
                    <img
                        src={hero}
                        alt="Modern Real Estate"
                        className="w-full h-full object-cover"
                    />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/40 z-10"></div>
            </div>

            {/* Content & 3D Model Grid */}
            <div className="relative z-10 w-full container mx-auto px-4 md:px-6 h-full flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pb-20 lg:pb-32">

                    {/* Left Column: 3D Building Model */}
                    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:order-1 order-2 mt-4 lg:mt-0">
                        <Suspense fallback={<div className="text-white/50 animate-pulse">Loading 3D Model...</div>}>
                            <Building3D />
                        </Suspense>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="text-left lg:order-2 order-1 flex flex-col justify-center">
                        <StaggerContainer>
                            <StaggerItem>
                                <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 text-white border border-white/10 text-sm font-medium mb-6 backdrop-blur-md shadow-2xl tracking-wide uppercase">
                                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                                    Premium Real Estate Consultant
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight font-heading drop-shadow-lg">
                                    Discover Your <br />
                                    <span className="text-secondary italic">
                                        Perfect Sanctuary
                                    </span>
                                </h1>
                            </StaggerItem>

                            <StaggerItem>
                                <p className="text-base md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed font-light drop-shadow-md">
                                    Experience the finest properties in Greater Noida and Ghaziabad. We turn your dream of a perfect home into reality with trust and transparency.
                                </p>
                            </StaggerItem>

                            <StaggerItem>
                                <div className="flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-stretch">
                                    <Link
                                        to="/properties"
                                        className="btn-primary min-w-[180px] py-3 md:py-4 text-base md:text-lg flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                                    >
                                        Explore Properties
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-3 md:py-4 rounded-lg font-semibold transition-all min-w-[180px] flex items-center justify-center"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
                <div className="flex flex-col items-center gap-2 text-white/30 hover:text-white/80 transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={24} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
