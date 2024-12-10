import React from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { AiFillShopping, AiFillHeart } from 'react-icons/ai'
import { sendToBotpress } from './botpressService';

const Footer = () => {

    const { card_product_count, wishlist_count } = useSelector(state => state.card)
    const navigate = useNavigate()
    const { userInfo } = useSelector(state => state.auth)
    const currentYear = new Date().getFullYear();


    useEffect(() => {
        // Create and load the bot script
        const script = document.createElement('script');
        script.src = "https://bot.orimon.ai/deploy/index.js";
        script.async = true;
        script.setAttribute('tenantId', 'a394f060-24d7-4e1d-ab61-1d7c15457f56');
        document.body.appendChild(script);

        // Function to dynamically position the bot widget
        const setWidgetPosition = () => {
            const botWidget = document.getElementById('orimon-bot'); // Ensure this matches the bot widget's ID or class
            if (botWidget) {
                const isMobile = window.innerWidth <= 768;
                botWidget.style.position = 'fixed';
                botWidget.style.bottom = '20px';
                botWidget.style.right = isMobile ? 'auto' : '20px';
                botWidget.style.left = isMobile ? '20px' : 'auto';
            }
        };

        // Set position on load and on resize
        const handleResize = () => setWidgetPosition();
        window.addEventListener('resize', handleResize);

        // Set position when the script is loaded
        script.onload = () => {
            setWidgetPosition();
        };

        // Cleanup script and event listener
        return () => {
            document.body.removeChild(script);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return null; // No JSX output


    return (
        <footer className='bg-[#F3F6Fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>
                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-[190px] h-[70x]' src="https://marketpulse-oxxa.onrender.com/images/logo.png" alt="logo" />
                        <ul className='flex flex-col gap-2 text-slate-600'>
                            <li>Address : Ho , Volta Region Ghana</li>
                            <li>Phone : +233247466205</li>
                            <li>Email : marketpulse@mail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>Usefull links</h2>
                            <div className='flex justify-between gap-[80px] lg:gap-[40px]'>
                                <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                  
                                    <li>
                                        <Link to='/about'>About our Shop</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Blogs</Link>
                                    </li>
                                </ul>
                                <ul className='flex flex-col gap-2 text-slate-600 text-sm'>
                                
                                    <li>
                                        <Link>About our Shop</Link>
                                    </li>
                                    <li>
                                        <Link>Delivery Information</Link>
                                    </li>
                                    <li>
                                        <Link>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link>Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-4/12 lg:w-full lg:mt-6'>
                    <div className='w-full flex flex-col justify-start gap-5'>
                        <h2 className='font-bold text-lg mb-2'>Join Our</h2>
                        <span>Get Email updates about our latest and shop specials offers</span>
                        <div className='h-[50px] w-full bg-white border relative'>
                            <input placeholder='Enter your mail' className='h-full bg-transparent w-full px-3 outline-0' type="text" />
                            <button className='h-full absolute right-0 bg-indigo-500 text-white uppercase px-4 font-bold text-sm'>Subscribe</button>
                        </div>
                        <ul className='flex justify-start items-center gap-3'>

                            <li>
                                <a className='w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><AiOutlineTwitter /></a>
                            </li>
                            <li>
                                <a className='w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"><FaLinkedin /></a>
                            </li>
                            <li>
                                <a className='w-[38px] h-[38px] hover:bg-[#7fad39] hover:text-white flex justify-center items-center bg-white rounded-full' href="https://github.com/Majormiles" target='_blank' rel="noopener noreferrer"><AiFillGithub /></a>

                            </li>
                            <li>
                                <a className='w-[38px] h-[38px]' href="https://devforum.42web.io/" target='_blank'>Forum</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='w-[85%] flex flex-wrap justify-center items-center text-slate-600 mx-auto py-5 text-center'>
                <span>
                    Copyright &copy; {currentYear} All rights reserved{' '}
                    <a className='text-blue-500 no-underline' href="">
                        Market Pulse
                    </a>
                </span>
            </div>
            <div className='hidden fixed md-lg:block w-[50px] bottom-3 h-[110px] right-2 bg-white rounded-full p-2'>
                <div className='w-full h-full flex gap-3 flex-col justify-center items-center'>
                    <div onClick={() => navigate(userInfo ? '/card' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-orange-500'><AiFillShopping /></span>
                        {
                            card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {
                                    card_product_count
                                }
                            </div>
                        }
                    </div>
                    <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#e2e2e2]'>
                        <span className='text-xl text-red-500'><AiFillHeart /></span>
                        {
                            wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-green-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]'>
                                {wishlist_count}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer