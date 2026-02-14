import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

import { siteConfig } from '../../config/siteConfig';

import logo from '../../assets/images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Properties', path: '/properties' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const closeMenu = () => {
        setIsOpen(false);
        window.scrollTo(0, 0); // Scroll to top on navigation
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-premium py-3' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
                        <img src={logo} alt={siteConfig.brandName} className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => window.scrollTo(0, 0)}
                                className={`text-sm font-medium tracking-wide transition-colors relative group ${isScrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full`}></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => window.scrollTo(0, 0)}
                            className="btn-primary flex items-center gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-0.5"
                        >
                            <Phone size={18} />
                            <span>Enquire Now</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`focus:outline-none transition-colors ${isScrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'}`}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl py-6 px-6 flex flex-col space-y-4 animate-fade-in border-t border-gray-100">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={closeMenu}
                                className="text-gray-800 hover:text-secondary font-medium py-3 border-b border-gray-50 last:border-0 text-lg"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={closeMenu}
                            className="btn-primary text-center py-4 rounded-lg font-medium mt-4 shadow-xl"
                        >
                            Enquire Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
