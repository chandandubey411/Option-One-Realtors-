import React from 'react';
import { MessageSquare, Search, FileCheck, Handshake, Smile } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description, number }) => ( // eslint-disable-line no-unused-vars
    <div className="relative flex flex-col items-center text-center p-6 z-10">
        <div className="w-16 h-16 bg-white border-4 border-secondary rounded-full flex items-center justify-center mb-6 shadow-lg z-10 transition-transform hover:scale-110 duration-300">
            <Icon size={32} className="text-secondary" />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex-grow hover:border-secondary transition-colors w-full">
            <div className="text-4xl font-bold text-gray-100 absolute top-20 right-10 -z-10 font-heading">{number}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    </div>
);

const Process = () => {
    const steps = [
        {
            icon: MessageSquare,
            number: "01",
            title: "Consultation",
            description: "We listen to your requirements, budget, and preferences to understand exactly what you are looking for."
        },
        {
            icon: Search,
            number: "02",
            title: "Property Selection",
            description: "We curate a list of properties that match your criteria and arrange site visits at your convenience."
        },
        {
            icon: FileCheck,
            number: "03",
            title: "Verification",
            description: "Our legal team conducts thorough due diligence to ensure the property has a clean title and no issues."
        },
        {
            icon: Handshake,
            number: "04",
            title: "Finalization",
            description: "We assist in price negotiation and paperwork to get you the best deal possible."
        },
        {
            icon: Smile,
            number: "05",
            title: "Handover",
            description: "Congratulations! We hand over the keys and assist with post-purchase formalities."
        }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">How We <span className="text-secondary">Work</span></h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Our transparent and structured process ensures a hassle-free experience for every client.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[3rem] left-0 w-full h-1 bg-gray-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <ProcessStep key={index} {...step} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="btn-primary inline-flex items-center gap-2 transform hover:scale-105 transition-transform shadow-xl">
                        Start Your Journey With Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Process;
