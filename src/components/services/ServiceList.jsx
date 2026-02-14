import React from 'react';
import { Home, Key, Coins, FileText, TrendingUp, ShieldCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features }) => ( // eslint-disable-line no-unused-vars
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col h-full hover:-translate-y-2">
        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
            <Icon size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-gray-800 font-heading">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{description}</p>

        <ul className="space-y-3 mt-auto">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-500">
                    <ShieldCheck size={18} className="text-primary mr-2 flex-shrink-0 mt-0.5" />
                    {feature}
                </li>
            ))}
        </ul>
    </div>
);

const ServiceList = () => {
    const services = [
        {
            icon: Home,
            title: "Property Buying",
            description: "We simplify the home buying process by offering a curated list of verified properties that match your lifestyle and budget.",
            features: [
                "Exclusive Residential Listings",
                "Commercial Property Sourcing",
                "Site Visits & Inspections",
                "Negotiation Support"
            ]
        },
        {
            icon: TrendingUp,
            title: "Property Selling",
            description: "Get the best market value for your property. We handle marketing, buyer verification, and negotiations to ensure a smooth sale.",
            features: [
                "Property Valuation",
                "Digital & Offline Marketing",
                "Buyer Screening",
                "Deal Closure Assistance"
            ]
        },
        {
            icon: Coins,
            title: "Home Loans",
            description: "We bridge the gap between you and your dream home with hassle-free loan assistance from top banks and financial institutions.",
            features: [
                "Lowest Interest Rates",
                "Quick Disbursals",
                "Documentation Support",
                "Multiple Bank Options"
            ]
        },
        {
            icon: FileText,
            title: "Legal Assistance",
            description: "Navigating property laws can be complex. Our legal experts ensure that your paperwork is flawless and your investment is secure.",
            features: [
                "Title Search & Verification",
                "Sale Deed Registration",
                "Agreement Drafting",
                "Legal Consultation"
            ]
        },
        {
            icon: Key,
            title: "Rental Services",
            description: "Whether you are a landlord looking for reliable tenants or a tenant seeking a home, we facilitate trusted rental agreements.",
            features: [
                "Tenant Verification",
                "Rental Agreement creation",
                "Property Management",
                "Corporate Leasing"
            ]
        },
        {
            icon: ShieldCheck,
            title: "Investment Consulting",
            description: "Maximize your returns with our data-driven investment advice tailored for the Ghaziabad and NCR real estate market.",
            features: [
                "Market Trend Analysis",
                "ROI Calculation",
                "Portfolio Management",
                "Future Growth Areas"
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our <span className="text-primary">Services</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        We offer a 360-degree approach to real estate, ensuring that every aspect of your property journey is covered with expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
