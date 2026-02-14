import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '../common/Motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StaggerItem className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-all">
            <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-semibold text-lg ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                    {question}
                </span>
                {isOpen ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
            </button>
            <div
                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {answer}
                </div>
            </div>
        </StaggerItem>
    );
};

const ServicesFAQ = () => {
    const faqs = [
        {
            question: "Do you charge a commission from buyers?",
            answer: "For most new project bookings in the NCR region, we do not charge a brokerage fee from buyers as we are authorized channel partners. However, for resale properties, a standard industry consultancy fee applies."
        },
        {
            question: "How long does it take to get a home loan approved?",
            answer: "With our partner banks, pre-approval can happen within 48-72 hours if all documents are in order. The complete disbursement process typically takes 7-10 working days."
        },
        {
            question: "Do you help with property registration?",
            answer: "Yes, absolutely. Our team will assist you with the entire registration process, including challan generation, appointment booking at the sub-registrar office, and witnessing the deed."
        },
        {
            question: "Can you help me find a tenant for my investment property?",
            answer: "Yes, we offer end-to-end rental management services. We verify potential tenants, draft the rent agreement, and ensure you get a hassle-free rental income."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <FadeInUp className="text-center mb-12">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">Service <span className="text-primary">FAQs</span></h2>
                </FadeInUp>

                <StaggerContainer className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} {...faq} />
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
};

export default ServicesFAQ;
