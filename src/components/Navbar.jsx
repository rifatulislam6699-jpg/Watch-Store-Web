import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [textIndex, setTextIndex] = useState(0);


    const rotatingTexts = ["One Trusted Destination", "40+ International Brands", "Authorized Service Center"];
    const links = ["All Watches", "Men", "Women", "Smart", "Brands", "Store", "Offers"];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 font-lato">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-20">

        
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex flex-col leading-none">
                        <span className="text-2xl font-black italic tracking-tighter uppercase">Wayne</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500">Watch Store</span>
                    </Link>

                    
                    <div className="hidden md:block h-6 overflow-hidden border-l border-gray-300 pl-6">
                        <p className="text-[11px] font-bold text-gray-600 uppercase tracking-widest transition-all duration-500 transform ease-in-out"
                            key={textIndex}
                            style={{ animation: 'slideUp 0.5s ease-out forwards' }}>
                            {rotatingTexts[textIndex]}
                        </p>
                    </div>
                </div>

          
                <div className="hidden lg:flex items-center space-x-8 text-[13px] font-semibold">
                    {links.map(link => (
                        <Link key={link} to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-cyan-500 transition-colors uppercase tracking-wider">
                            {link}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center space-x-5">
                    <Search size={20} className="cursor-pointer hover:text-cyan-500" />
                    <ShoppingBag size={20} className="cursor-pointer hover:text-cyan-500" />
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;