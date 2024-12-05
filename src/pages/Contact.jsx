import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Headers from '../components/Headers';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <Headers />
            <section className='bg-[url("http://localhost:3000/images/banner/img3.gif")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-center'>
                <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                    <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                        <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                            <h2 className='text-3xl font-bold'>Contact Us</h2>
                            <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                                <Link to='/'>Home</Link>
                                <span className='pt-1'><MdOutlineKeyboardArrowRight /></span>
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-slate-600'>Get In Touch</h2>
                        <p className='text-lg text-slate-500 mt-3'>
                            We’d love to hear from you. Fill out the form below or reach out to us through the details provided.
                        </p>
                    </div>
                    <div className='flex flex-wrap gap-10'>
                        {/* Contact Information */}

                        {/* Contact Form */}
                        <div className='w-3/4 bg-white shadow-lg rounded-md p-8 mx-auto'>
                            <form>
                                <div className='mb-5'>
                                    <label className='block text-slate-600 font-medium mb-2' htmlFor='name'>
                                        Full Name
                                    </label>
                                    <input
                                        type='text'
                                        id='name'
                                        className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                        placeholder='Enter your full name'
                                    />
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-slate-600 font-medium mb-2' htmlFor='email'>
                                        Email Address
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div className='mb-5'>
                                    <label className='block text-slate-600 font-medium mb-2' htmlFor='message'>
                                        Message
                                    </label>
                                    <textarea 
                                        required
                                        id='message'
                                        className='w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                        rows='5'
                                        placeholder='Write your message here...'
                                    ></textarea>
                                </div>
                                <div className='text-center'>
                                    <button
                                        type='submit'
                                        className='bg-[#414E58] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-600'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>



                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contact;
