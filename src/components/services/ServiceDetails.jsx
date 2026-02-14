import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp } from '../common/Motion';

const ServiceSection = ({ title, description, benefits, image, isReversed, ctaText, ctaLink }) => (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 py-16 overflow-hidden`}>
        {/* Image */}
        <FadeInUp className="lg:w-1/2 w-full" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            </div>
        </FadeInUp>

        {/* Content */}
        <FadeInUp className="lg:w-1/2 w-full" delay={0.4}>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">{title}</h3>
            <div className="w-20 h-1.5 bg-secondary rounded-full mb-8"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {description}
            </p>

            <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                ))}
            </ul>

            <Link to={ctaLink} className="btn-primary inline-flex items-center gap-2 group">
                {ctaText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </FadeInUp>
    </div>
);

const ServiceDetails = () => {
    const services = [
        {
            title: "Property Buying Assistance",
            description: "Finding the perfect home is a journey, and we are here to make it seamless. We curate a list of properties that match your lifestyle, budget, and future goals. From initial viewing to final possession, we stand by you.",
            benefits: [
                "Access to exclusive pre-launch offers in Raj Nagar Extension.",
                "Verified listings with clear legal titles.",
                "Negotiation support to get you the best market price.",
                "Assistance with site visits and inspections."
            ],
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            ctaText: "Find Your Dream Home",
            ctaLink: "/properties",
            isReversed: false
        },
        {
            title: "Strategic Property Selling",
            description: "Selling a property requires the right exposure and strategy. We use a mix of traditional and digital marketing to ensure your property reaches the right buyers quickly and at the best valuation.",
            benefits: [
                "Professional property valuation and staging advice.",
                "Targeted marketing campaigns across social media and portals.",
                "Screening of potential buyers to ensure serious inquiries.",
                "Complete handling of paperwork and legal formalities."
            ],
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            ctaText: "Sell Your Property",
            ctaLink: "/contact",
            isReversed: true
        },
        {
            title: "Home Loans & Financial Aid",
            description: "Don't let finances hold you back. We have partnered with leading banks and financial institutions to provide you with quick, hassle-free home loans at the lowest interest rates.",
            benefits: [
                "Tie-ups with HDFC, SBI, ICICI, and Axis Bank.",
                "Quick eligibility check and minimal documentation.",
                "Assistance with loan transfers and top-up loans.",
                "Transparent processing with no hidden charges."
            ],
            image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            ctaText: "Check Loan Eligibility",
            ctaLink: "/contact",
            isReversed: false
        },
        {
            title: "Legal & Documentation Services",
            description: "Real estate transactions involve complex legalities. Our team of legal experts ensures that every document is vetted, every title is clear, and your investment is 100% secure.",
            benefits: [
                "Title search and property verification reports.",
                "Drafting of Sale Agreement, Sale Deed, and Rent Agreements.",
                "Assistance with property registration at the sub-registrar office.",
                "Legal advice on property disputes and inheritance."
            ],
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Using a legal/document related image
            ctaText: "Get Legal Advice",
            ctaLink: "/contact",
            isReversed: true
        }
    ];

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {services.map((service, index) => (
                    <ServiceSection key={index} {...service} />
                ))}
            </div>
        </section>
    );
};

export default ServiceDetails;
