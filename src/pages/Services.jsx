import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '../components/services/ServicesHero';
import ServiceDetails from '../components/services/ServiceDetails';
import ServicesFAQ from '../components/services/ServicesFAQ';
import ServicesCTA from '../components/services/ServicesCTA';
import Process from '../components/services/Process';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Option-One Realtors</title>
                <meta name="description" content="Explore our comprehensive real estate services including buying, selling, renting, loans, and legal assistance." />
            </Helmet>
            <main>
                <ServicesHero />
                <ServiceDetails />
                <Process />
                <ServicesFAQ />
                <ServicesCTA />
            </main>
        </>
    );
};

export default Services;
