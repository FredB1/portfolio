import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-blue-500 text-black ">
                <div className="container mx-auto px-6 py-4 flex items-center">
                    <Link href="/" className="text-5xl font-semibold font-Bangers tracking-custom">Fred Burke</Link>
                    <div className="ml-auto flex items-center">
                        <Link href="/about" className="px-3 py-2 rounded-md text-3xl font-medium leading-5 text-black-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</Link>
                        <Link href="/projects" className="px-3 py-2 rounded-md text-3xl font-medium leading-5 text-black-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</Link>
                        <Link href="/services" className="px-3 py-2 rounded-md text-3xl font-medium leading-5 text-black-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Services</Link>
                        <Link href="/contact" className="px-3 py-2 rounded-md text-3xl font-medium leading-5 text-black-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</Link>
                    </div>
                    <div className={`md:hidden ${isOpen ? 'flex ml-auto' : 'hidden'}`}>
                        <a href="https://www.github.com/fredb1" target="_blank" rel="noopener noreferrer" alt="My Github">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#171515" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/fredb7" target="_blank" rel="noopener noreferrer" alt="Connect with me on Linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#171515" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="2" />
                                <line x1="8" y1="11" x2="8" y2="16" />
                                <line x1="8" y1="8" x2="8" y2="8.01" />
                                <line x1="12" y1="16" x2="12" y2="11" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                        </a>
                        <a href="../FredBurkeResume315.pdf" download="FredBurkeResume315.pdf">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-export" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#171515" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M11.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v5m-5 6h7m-3 -3l3 3l-3 3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="block md:hidden">
                <FiMenu className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`} />
                <svg
                    className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Navbar
