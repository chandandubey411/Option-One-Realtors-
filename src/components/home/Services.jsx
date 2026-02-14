
import React from 'react';
import { Home, Key, Coins, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp, StaggerContainer, StaggerItem, HoverCard } from '../common/Motion';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <StaggerItem>
        <HoverCard className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-full">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 text-secondary">
                <Icon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
            <Link to="/services" className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={16} />
            </Link>
        </HoverCard>
    </StaggerItem>
);

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <FadeInUp className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">Comprehensive <span className="text-primary">Services</span></h2>
                    <p className="text-gray-600 mt-4 max-w-xl mx-auto">
                        We offer end-to-end real estate solutions designed to make your property journey smooth and hassle-free.
                    </p>
                </FadeInUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <ServiceCard
                        icon={Home}
                        title="Buying & Selling"
                        description="Expert guidance for buying your dream home or getting the best value for your property sell."
                    />
                    <ServiceCard
                        icon={Coins}
                        title="Home Loans"
                        description="Hassle-free loan assistance from top banks with the lowest interest rates and quick approval."
                    />
                    <ServiceCard
                        icon={Key}
                        title="Rental Management"
                        description="Trusted rental services for tenants and landlords including verification and agreements."
                    />
                </StaggerContainer>

                <FadeInUp className="text-center" delay={0.4}>
                    <Link to="/services" className="btn-outline inline-flex items-center gap-2 group">
                        View All Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </FadeInUp>
            </div>
        </section>
    );
};

export default Services;

