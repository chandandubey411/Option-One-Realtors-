import React from 'react';
import { Award, CheckCircle, Clock, Heart } from 'lucide-react';

const ReasonCard = ({ icon: Icon, title, description }) => ( // eslint-disable-line no-unused-vars
    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
        <div className="bg-primary text-white p-3 rounded-lg shrink-0">
            <Icon size={24} />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    </div>
);

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: Award,
            title: "Trusted & Verified",
            description: "We only list properties that are legally verified and free from any disputes, ensuring your peace of mind."
        },
        {
            icon: Clock,
            title: "Local Expertise",
            description: "With years of experience in Raj Nagar Extension, we know every street, project, and price trend."
        },
        {
            icon: CheckCircle,
            title: "Transparent Deals",
            description: "No hidden charges or manipulative tactics. We believe in complete transparency between buyers and sellers."
        },
        {
            icon: Heart,
            title: "Customer First Approach",
            description: "Your satisfaction is our priority. We work tirelessly to find a property that matches your dreams and budget."
        }
    ];

    return (
        <section className="section-container bg-white">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Handshake"
                            className="rounded-xl shadow-2xl z-10 relative"
                        />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full -z-0"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-0"></div>
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-primary">Us?</span></h2>
                    <div className="w-20 h-1 bg-secondary mb-8"></div>

                    <div className="grid grid-cols-1 gap-6">
                        {reasons.map((reason, index) => (
                            <ReasonCard key={index} {...reason} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
