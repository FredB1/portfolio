import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-blue-500 text-black">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="text-5xl font-semibold font-Bangers tracking-custom">
                        Fred Burke
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/about" className="text-3xl font-medium hover:text-white">About</Link>
                        <Link href="/projects" className="text-3xl font-medium hover:text-white">Projects</Link>
                        <Link href="/services" className="text-3xl font-medium hover:text-white">Services</Link>
                        <Link href="/contact" className="text-3xl font-medium hover:text-white">Contact</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
                            {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/about" className="block px-3 py-2 rounded-md text-2xl font-medium text-black hover:text-white hover:bg-gray-700">About</Link>
                        <Link href="/projects" className="block px-3 py-2 rounded-md text-2xl font-medium text-black hover:text-white hover:bg-gray-700">Projects</Link>
                        <Link href="/services" className="block px-3 py-2 rounded-md text-2xl font-medium text-black hover:text-white hover:bg-gray-700">Services</Link>
                        <Link href="/contact" className="block px-3 py-2 rounded-md text-2xl font-medium text-black hover:text-white hover:bg-gray-700">Contact</Link>
                        {/* Social links */}
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.github.com/fredb1" target="_blank" rel="noopener noreferrer" aria-label="Github">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.2 4.2 0 00-.1 3.2 4.6 4.6 0 00-1.3 3.2c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2v3.5" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/fredb7" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="4" y="4" width="16" height="16" rx="2" />
                                    <line x1="8" y1="11" x2="8" y2="16" />
                                    <line x1="8" y1="8" x2="8" y2="8.01" />
                                    <line x1="12" y1="16" x2="12" y2="11" />
                                    <path d="M16 16v-3a2 2 0 00-4 0" />
                                </svg>
                            </a>
                            <a href="../FredBurkeResume315.pdf" download="FredBurkeResume315.pdf" aria-label="Resume">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 3v4a1 1 0 001 1h4" />
                                    <path d="M11.5 21h-4.5a2 2 0 01-2-2v-14a2 2 0 012-2h7l5 5v5m-5 6h7m-3-3l3 3-3 3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
