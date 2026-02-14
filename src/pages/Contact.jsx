import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from '../components/contact/ContactHero';
import ContactContent from '../components/contact/ContactContent';
import FAQ from '../components/contact/FAQ';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Option-One Realtors</title>
                <meta name="description" content="Get in touch with Option-One Realtors for all your real estate needs. Visit our office in Gaur City 2 or call us today." />
            </Helmet>
            <main>
                <ContactHero />
                <ContactContent />
                <FAQ />
            </main>
        </>
    );
};

export default Contact;
