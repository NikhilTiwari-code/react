import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="shadow sticky z-50 top-0 bg-gradient-to-r from-gray-900 to-gray-800">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12 hover:scale-105 transition-transform"
                            alt="Logo"
                        />
                    </Link>
                    
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button 
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop and Mobile Navigation */}
                    <div className={`
                        ${isMenuOpen ? 'block' : 'hidden'} 
                        lg:block 
                        w-full 
                        lg:w-auto 
                        absolute 
                        lg:relative 
                        top-full 
                        left-0 
                        bg-gradient-to-r 
                        from-gray-900 
                        to-gray-800 
                        lg:bg-none 
                        z-50
                    `}>
                        <div className="flex flex-col lg:flex-row items-center lg:space-x-4 p-4 lg:p-0 space-y-2 lg:space-y-0">
                            <NavLink
                                to="/about"
                                className={({isActive}) => `
                                    w-full 
                                    lg:w-auto 
                                    text-center 
                                    px-4 
                                    py-2 
                                    rounded-full 
                                    font-semibold 
                                    ${isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-700 transition-colors'}
                                `}
                                onClick={toggleMenu}
                            >
                                About
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({isActive}) => `
                                    w-full 
                                    lg:w-auto 
                                    text-center 
                                    px-4 
                                    py-2 
                                    rounded-full 
                                    font-semibold 
                                    ${isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-700 transition-colors'}
                                `}
                                onClick={toggleMenu}
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/login"
                                className={({isActive}) => `
                                    w-full 
                                    lg:w-auto 
                                    text-center 
                                    px-6 
                                    py-2 
                                    rounded-full 
                                    font-semibold 
                                    ${isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-gray-700 transition-colors'}
                                `}
                                onClick={toggleMenu}
                            >
                                Log in
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="
                                    w-full 
                                    lg:w-auto 
                                    text-center 
                                    px-6 
                                    py-2 
                                    bg-orange-600 
                                    text-white 
                                    rounded-full 
                                    font-semibold 
                                    hover:bg-orange-700 
                                    transition-colors
                                "
                                onClick={toggleMenu}
                            >
                                Sign up
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}