import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeInUp, StaggerContainer, StaggerItem } from '../common/Motion';

import { siteConfig } from '../../config/siteConfig';

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

const FAQ = () => {
    const faqs = [
        {
            question: "Where is your office located?",
            answer: `We are located at ${siteConfig.contact.address}. You can visit us any day of the week.`
        },
        {
            question: "Do you deal in commercial properties as well?",
            answer: "Yes, we have a wide range of commercial properties including shops, office spaces, and SCO plots in prime locations of Greater Noida and Ghaziabad."
        },
        {
            question: "Are there any hidden charges?",
            answer: "Absolutely not. We believe in 100% transparency. Any applicable fees or brokerage charges (for resale/rental) will be discussed clearly before any deal is finalized."
        },
        {
            question: "How can I schedule a site visit?",
            answer: "You can simply call us or fill out the contact form above. Our team will get in touch with you to schedule a visit at your convenience, including weekends."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <FadeInUp className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 font-heading">Frequently Asked Questions</h2>
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

export default FAQ;
