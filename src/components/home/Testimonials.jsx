import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '../common/Motion';
import { siteConfig } from '../../config/siteConfig';

const TestimonialCard = ({ name, role, content, rating }) => (
    <StaggerItem className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative pt-12 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
        <div className="absolute -top-6 left-8 bg-secondary text-white p-4 rounded-xl shadow-md">
            <Quote size={24} />
        </div>
        <div className="flex gap-1 text-yellow-500 mb-4">
            {[...Array(rating)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
            ))}
        </div>
        <p className="text-gray-600 mb-6 italic flex-grow">"{content}"</p>
        <div className="mt-auto">
            <h4 className="font-bold text-gray-900 text-lg">{name}</h4>
            <p className="text-sm text-gray-500 uppercase tracking-wide">{role}</p>
        </div>
    </StaggerItem>
);

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajeev Malhotra",
            role: "Home Buyer",
            content: `${siteConfig.brandName} made my home buying journey incredible. They found the perfect apartment within my budget. Highly recommended!`,
            rating: 5
        },
        {
            name: "Sneha Gupta",
            role: "Property Investor",
            content: "Transparency is their biggest asset. I have invested in multiple commercial properties through them and the returns have been fantastic.",
            rating: 5
        },
        {
            name: "Amit & Priya",
            role: "First-time Buyers",
            content: `We were confused about the loan process, but their team handled everything. We are now proud owners of a 3BHK thanks to ${siteConfig.brandName}.`,
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <FadeInUp className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Client Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-heading">Trusted by <span className="text-primary">Families</span></h2>
                </FadeInUp>

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default Testimonials;
