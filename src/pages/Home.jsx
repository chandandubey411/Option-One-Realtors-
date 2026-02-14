import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import StatsPreview from '../components/home/StatsPreview';
import About from '../components/home/About';
import FeaturedProperties from '../components/home/FeaturedProperties';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';
import HomeContactCTA from '../components/home/HomeContactCTA';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Option-One Realtors | Premium Real Estate Consultant in Greater Noida & Ghaziabad</title>
                <meta name="description" content="Find your dream property in Gaur City 2, Greater Noida & Ghaziabad with Option-One Realtors. Trusted real estate consultants for buying, selling, and renting premium properties." />
                <meta name="keywords" content="Real Estate Greater Noida, Gaur City 2 Property, Buy Flat Ghaziabad, Property Consultant, Option-One Realtors" />
            </Helmet>

            <main>
                <Hero />
                <StatsPreview />
                <About />
                <FeaturedProperties />
                <Services />
                <Testimonials />
                <HomeContactCTA />
            </main>
        </>
    );
};

export default Home;
