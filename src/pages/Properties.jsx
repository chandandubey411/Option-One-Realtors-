import React from 'react';
import PropertiesGrid from '../components/properties/PropertiesGrid';
import { Helmet } from 'react-helmet-async';
import { FadeInUp } from '../components/common/Motion';

const Properties = () => {
    return (
        <>
            <Helmet>
                <title>Properties For Sale | Option-One Realtors</title>
                <meta name="description" content="Browse our extensive collection of premium properties in Gaur City 2, Greater Noida and Ghaziabad." />
            </Helmet>
            <main className="pt-10">
                <div className="bg-primary py-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <FadeInUp className="relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our <span className="text-secondary">Properties</span></h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto px-4">
                            Explore our handpicked selection of premium apartments, villas, and commercial spaces.
                        </p>
                    </FadeInUp>
                </div>
                <PropertiesGrid />
            </main>
        </>
    );
};

export default Properties;
