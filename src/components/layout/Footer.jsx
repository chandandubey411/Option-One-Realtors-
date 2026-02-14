import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

import { siteConfig } from '../../config/siteConfig';

import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} alt={siteConfig.brandName} className="h-16 w-auto brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {siteConfig.meta.description}
                        </p>
                        <div className="flex space-x-4">
                            {/* Social links placeholder or implementation */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-secondary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-secondary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/properties" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-secondary transition-colors">
                                    Featured Properties
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-secondary transition-colors">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-secondary transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                                <span>{siteConfig.contact.address}</span>
                            </li>
                            {siteConfig.contact.phone.map((phone, index) => (
                                <li key={index} className="flex items-center gap-4 text-gray-400">
                                    <Phone className="text-secondary shrink-0" size={20} />
                                    <a href={`tel:${phone.number}`} className="hover:text-white transition-colors">
                                        {phone.number} ({phone.label})
                                    </a>
                                </li>
                            ))}
                            {siteConfig.contact.email.map((email, index) => (
                                <li key={index} className="flex items-center gap-4 text-gray-400">
                                    <Mail className="text-secondary shrink-0" size={20} />
                                    <a href={`mailto:${email.address}`} className="hover:text-white transition-colors">
                                        {email.address}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
