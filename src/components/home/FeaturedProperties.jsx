import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../properties/PropertyCard';
import { propertiesData } from '../../data/properties';
import { FadeInUp, StaggerContainer, StaggerItem } from '../common/Motion';

const FeaturedProperties = () => {
    // Select top 4 properties for the home page
    const featuredList = propertiesData.slice(0, 4);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <FadeInUp className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-xl">
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Exclusive Listings</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">Featured <span className="text-primary">Properties</span></h2>
                    </div>
                    <Link to="/properties" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                        View All Listings <ArrowRight size={20} />
                    </Link>
                </FadeInUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {featuredList.map(property => (
                        <StaggerItem key={property.id} className="transition-all duration-300 hover:-translate-y-2">
                            <div className="rounded-xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 bg-white group h-full">
                                <PropertyCard {...property} />
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <FadeInUp className="text-center md:hidden">
                    <Link to="/properties" className="btn-outline inline-flex items-center gap-2">
                        View All Listings <ArrowRight size={20} />
                    </Link>
                </FadeInUp>
            </div>
        </section>
    );
};

export default FeaturedProperties;
