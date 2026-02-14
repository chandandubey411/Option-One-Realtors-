import React from 'react';
import { FadeInUp } from '../common/Motion';
import { siteConfig } from '../../config/siteConfig';

const Story = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Side */}
                    <FadeInUp className="lg:w-1/2 relative" delay={0.2}>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Team"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full z-0 block"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary/20 rounded-2xl z-0 block"></div>
                    </FadeInUp>

                    {/* Text Side */}
                    <FadeInUp className="lg:w-1/2" delay={0.4}>
                        <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Our Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
                            Defining Real Estate Excellence in <span className="text-primary">NCR Region</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Established with a vision to bring transparency and professionalism to the real estate sector, <strong>{siteConfig.brandName}</strong> has grown from a humble consultancy to one of the region's most trusted names.
                            </p>
                            <p className="mb-4">
                                Our journey began with a commitment to helping families find their perfect haven. We saw the promise of this land and dedicated ourselves to serving our clients with integrity.
                            </p>
                            <p>
                                Today, we pride ourselves not just on the properties we sell, but on the relationships we build. Every key we hand over represents a promise kept—a promise of quality, legality, and value.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-4">
                            <div className="h-12 w-1 bg-secondary rounded-full"></div>
                            <div>
                                <p className="text-lg font-bold text-primary">Director</p>
                                <p className="text-sm text-gray-500">{siteConfig.brandName}</p>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

export default Story;
