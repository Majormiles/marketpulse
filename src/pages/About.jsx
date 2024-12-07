import React, { useState } from 'react';
import { GrMail } from 'react-icons/gr';
import Header_about from '../components/Header_about'
import Footer from '../components/Footer';
import { AiOutlineTwitter, AiFillGithub, AiFillHeart, AiFillShopping } from 'react-icons/ai';
import { FaList, FaUser, FaLock, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const About = () => {
    const [showSidebar, setShowSidebar] = useState(false); // Sidebar is initially hidden
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <Header_about />
            {/* Sidebar for Mobile */}
            <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${showSidebar ? 'left-0' : '-left-[300px]'} top-0 overflow-y-auto bg-white h-screen py-5 px-8 md:hidden`}>
                <div className="flex justify-start flex-col gap-6">
                    {/* Logo Section */}
                    <Link to="/">
                        <img src="https://marketpulse-oxxa.onrender.com/images/logo.png" alt="logo" />
                    </Link>

                    {/* Menu Section */}
                    <ul className="flex flex-col justify-start items-start gap-3 text-[#1c1c1c] ml-auto">
                        <li><Link to="/" className={`py-2 block ${pathname === '/' ? 'text-[#fd7700]' : 'text-slate-600'}`}>Home</Link></li>
                        <li><Link to="/shops" className={`py-2 block ${pathname === '/shop' ? 'text-[#fd7700]' : 'text-slate-600'}`}>Shop</Link></li>
                        <li><Link to="/about" className={`py-2 block ${pathname === '/about' ? 'text-[#fd7700]' : 'text-slate-600'}`}>About</Link></li>
                        <li><Link to="/contacts" className={`py-2 block ${pathname === '/contact' ? 'text-[#fd7700]' : 'text-slate-600'}`}>Contact</Link></li>
                    </ul>

                    {/* Additional Section */}
                    <div className="w-full flex justify-end gap-3 items-center">
                        <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center">
                            <span><FaUser /></span>
                        </div>
                        <div className="flex justify-end flex-col gap-1">
                            <h2 className="text-md font-medium text-slate-700">+233247466205</h2>
                            <span className="text-sm">support 24/7 time</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Page Content */}
            <div className="flex">
                <aside className="md:hidden md:block w-1/4 bg-[#FCF8F5]  text-[#414E58] min-h-screen p-6 sticky top-0">
                    <nav className="space-y-4">
                        <a href="#overview" className="block text-lg font-medium hover:text-indigo-300">Overview</a>
                        <a href="#features" className="block text-lg font-medium hover:text-indigo-300">Key Features</a>
                        <a href="#vision" className="block text-lg font-medium hover:text-indigo-300">Our Vision</a>
                        <a href="#team" className="block text-lg font-medium hover:text-indigo-300">Meet the Team</a>
                    </nav>
                </aside>

                <main className="w-3/4 md:w-full p-8 overflow-y-scroll">
                    <section id="overview" className="mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">About MarketPulse</h1>
                        <p className="text-lg text-gray-600">
                            MarketPulse is a next-generation multivendor e-commerce platform designed to connect buyers and sellers globally. Our platform addresses key challenges in the digital marketplace by offering secure transactions, seamless vendor management, and innovative tools for customer engagement.
                        </p>
                    </section>

                    <section id="features" className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
                        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                            <li>Advanced vendor verification for trust and reliability.</li>
                            <li>Real-time chat and AI-powered chatbot for enhanced communication.</li>
                            <li>Secure payment gateways supporting multiple methods.</li>
                            <li>Centralized data management for streamlined operations.</li>
                            <li>User-friendly interface optimized for mobile and desktop devices.</li>
                        </ul>
                    </section>

                    <section id="vision" className="mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
                        <p className="text-lg text-gray-600">
                            At MarketPulse, we aim to revolutionize global trade by creating a platform that bridges gaps in the e-commerce ecosystem. By fostering trust, accessibility, and efficiency, we empower small businesses and large enterprises alike to thrive in a digital-first world.
                        </p>
                    </section>

                    <section id="team">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet the Team</h2>
                        <p className="text-lg text-gray-600">
                            MarketPulse is developed by a team of passionate innovators from Ho Technical University. Our mission is to create impactful solutions that address real-world problems, driving progress in the e-commerce sector.
                        </p>
                    </section>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default About;
