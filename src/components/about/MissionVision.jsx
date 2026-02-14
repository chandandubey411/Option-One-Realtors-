import React from 'react';
import { Target, Eye } from 'lucide-react';
import { FadeInUp } from '../common/Motion';
import { siteConfig } from '../../config/siteConfig';

const MissionVision = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-12 transform origin-top-right"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Mission Card */}
                    <FadeInUp className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-secondary hover:-translate-y-2 transition-transform duration-300" delay={0.2}>
                        <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-secondary">
                            <Target size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To empower every individual with the right property solutions by fostering a culture of <strong>honesty, integrity, and client-centric service</strong>. We aim to simplify the complex process of buying and selling real estate, making it a joyful experience for every family.
                        </p>
                    </FadeInUp>

                    {/* Vision Card */}
                    <FadeInUp className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300" delay={0.4}>
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Eye size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To be the <strong>most preferred and trusted real estate consultancy</strong> in the region. We envision a future where {siteConfig.brandName} is synonymous with quality living and smart investments, setting new benchmarks in the industry.
                        </p>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
