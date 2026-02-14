import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { FadeInUp } from '../common/Motion';
import { siteConfig } from '../../config/siteConfig';

const ServicesCTA = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <FadeInUp>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Ready to Start Your Real Estate Journey?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                        Whether you need expert advice, a property valuation, or loan assistance, our team is just a call away. Experience the {siteConfig.brandName} difference today.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link
                            to="/contact"
                            className="btn-secondary text-lg px-8 py-4 shadow-xl hover:-translate-y-1 transition-transform flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            Book a Free Consultation
                        </Link>
                        <a
                            href={`mailto:${siteConfig.contact.email[0].address}`}
                            className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                            <Mail size={20} />
                            Email Us
                        </a>
                    </div>
                </FadeInUp>
            </div>
        </section>
    );
};

export default ServicesCTA;
