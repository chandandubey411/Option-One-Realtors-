import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';

const PropertyCard = ({ image, title, location, price, specs }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
        <div className="relative overflow-hidden h-64">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                For Sale
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white font-bold text-xl">{price}</span>
            </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex items-center text-gray-500 mb-4 text-sm">
                <MapPin size={16} className="mr-1 text-secondary" />
                {location}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-4 mb-6">
                <div className="flex flex-col items-center">
                    <Bed size={20} className="text-gray-400 mb-1" />
                    <span className="text-sm font-semibold">{specs.beds} Beds</span>
                </div>
                <div className="flex flex-col items-center border-l border-gray-100">
                    <Bath size={20} className="text-gray-400 mb-1" />
                    <span className="text-sm font-semibold">{specs.baths} Baths</span>
                </div>
                <div className="flex flex-col items-center border-l border-gray-100">
                    <Square size={20} className="text-gray-400 mb-1" />
                    <span className="text-sm font-semibold">{specs.area}</span>
                </div>
            </div>

            <a href="#contact" className="mt-auto w-full btn-outline flex items-center justify-center gap-2 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-medium">
                Enquire Now
            </a>
        </div>
    </div>
);

const Properties = () => {
    const properties = [
        {
            id: 1,
            title: "Luxury 3BHK Apartment",
            location: "Raj Nagar Extension, Ghaziabad",
            price: "₹ 65.5 Lakhs",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            specs: { beds: 3, baths: 2, area: "1450 sqft" }
        },
        {
            id: 2,
            title: "Premium Villa with Garden",
            location: "Govindpuram, Ghaziabad",
            price: "₹ 1.25 Cr",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            specs: { beds: 4, baths: 4, area: "2800 sqft" }
        },
        {
            id: 3,
            title: "Modern 2BHK Flat",
            location: "Raj Nagar Extension, Ghaziabad",
            price: "₹ 42.0 Lakhs",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            specs: { beds: 2, baths: 2, area: "1050 sqft" }
        }
    ];

    return (
        <section id="properties" className="section-container bg-gray-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Properties</span></h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our handpicked selection of premium properties in prime locations. Verified listings for your peace of mind.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>

            <div className="text-center mt-12">
                <a href="#contact" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors border-b-2 border-transparent hover:border-secondary pb-1">
                    View All Listings <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
};

export default Properties;
