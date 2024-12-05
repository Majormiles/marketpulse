import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { FaFacebookF } from 'react-icons/fa';
import FadeLoader from 'react-spinners/FadeLoader';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import { customer_register, messageClear } from '../store/reducers/authReducer';

const Register = () => {
    const navigate = useNavigate();
    const { loader, successMessage, errorMessage, userInfo } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [modalOpen, setModalOpen] = useState(true); // Modal state to control visibility

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const register = (e) => {
        e.preventDefault();
        dispatch(customer_register(state));
    };

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
        if (userInfo) {
            navigate('/');
        }
    }, [successMessage, errorMessage, navigate, dispatch, userInfo]);

    return (
        <div>
            {loader && (
                <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
                    <FadeLoader />
                </div>
            )}

            <Headers />
            
            {/* Modal with blurred background */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-md w-[80%] md:w-[60%] max-w-lg z-50 relative">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-2 right-2 text-xl font-bold text-gray-600"
                        >
                            X
                        </button>
                        <h2 className="text-center text-xl text-slate-600 font-bold mb-6">Register</h2>
                        <form onSubmit={register} className="text-slate-600">
                            <div className="flex flex-col gap-2 mb-4">
                                <input
                                    onChange={inputHandle}
                                    value={state.name}
                                    type="text"
                                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <input
                                    onChange={inputHandle}
                                    value={state.email}
                                    type="email"
                                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 mb-6">
                                <input
                                    onChange={inputHandle}
                                    value={state.password}
                                    type="password"
                                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                                Register
                            </button>
                        </form>

                        <div className="flex justify-center items-center py-4">
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                            <span className="px-3 text-slate-600">or</span>
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                        </div>

                        <div className="text-center text-slate-600 pt-1">
                            <p>
                                You already have an account?{' '}
                                <Link className="text-blue-500" to="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Register;
