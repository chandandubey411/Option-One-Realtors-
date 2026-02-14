import React from 'react';
import { MapPin, Bed, Bath, Square, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TiltCard } from '../common/Motion';

const PropertyCard = ({ title, location, price, type, specs, status, image }) => {
    return (
        <TiltCard className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100 relative">
            <div className="h-full flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden h-64">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm uppercase tracking-wide">
                        {status}
                    </div>
                    <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-sm">
                        {type}
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                        <span className="text-white font-bold text-xl block">{price}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex-grow flex flex-col bg-white">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-primary transition-colors line-clamp-1" title={title}>
                        {title}
                    </h3>

                    <div className="flex items-start text-gray-500 mb-3 text-sm min-h-[40px]">
                        <MapPin size={16} className="mr-1.5 mt-0.5 text-secondary flex-shrink-0" />
                        <span className="line-clamp-2">{location}</span>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 border-t border-gray-100 pt-3 mb-3">
                        {specs && specs.beds > 0 && (
                            <div className="flex flex-col items-center">
                                <Bed size={18} className="text-gray-400 mb-1" />
                                <span className="text-xs font-semibold text-gray-600">{specs.beds} Beds</span>
                            </div>
                        )}

                        {specs && specs.baths > 0 && (
                            <div className={`flex flex-col items-center ${specs.beds > 0 ? 'border-l border-gray-100' : ''}`}>
                                <Bath size={18} className="text-gray-400 mb-1" />
                                <span className="text-xs font-semibold text-gray-600">{specs.baths} Baths</span>
                            </div>
                        )}

                        <div className={`flex flex-col items-center ${specs && (specs.baths > 0 || specs.beds > 0) ? 'border-l border-gray-100' : ''} ${specs && specs.beds === 0 && specs.baths === 0 ? 'col-span-3' : ''}`}>
                            <Square size={18} className="text-gray-400 mb-1" />
                            <span className="text-xs font-semibold text-gray-600">{specs ? specs.area : ''}</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <Link
                        to="/contact"
                        className="mt-auto w-full btn-outline flex items-center justify-center gap-2 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all font-semibold text-sm group-hover:border-primary"
                    >
                        View Details <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </TiltCard>
    );
};

export default PropertyCard;
