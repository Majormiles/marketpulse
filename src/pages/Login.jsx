import React, { useState, useEffect } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import FadeLoader from 'react-spinners/FadeLoader';
import { useSelector, useDispatch } from 'react-redux';
import { customer_login, messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';

const Login = () => {

    const { loader, successMessage, errorMessage, userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [modalOpen, setModalOpen] = useState(true); // Modal open state

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const login = (e) => {
        e.preventDefault();
        dispatch(customer_login(state));
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
            <Headers />
            {loader && (
                <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
                    <FadeLoader />
                </div>
            )}
            
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
                        <h2 className="text-center text-xl text-slate-600 font-bold mb-6">Login</h2>
                        
                        <form onSubmit={login} className="text-slate-600">
                            <div className="flex flex-col gap-2 mb-4">
                                <input
                                    onChange={inputHandle}
                                    value={state.email}
                                    type="email"
                                    className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-indigo-500 rounded-md"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
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
                                />
                            </div>
                            <button className="px-8 w-full py-2 bg-purple-500 shadow-lg hover:shadow-indigo-500/30 text-white rounded-md">
                                Login
                            </button>
                        </form>

                        <div className="flex justify-center items-center py-4">
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                            <span className="px-3 text-slate-600">or</span>
                            <div className="h-[1px] bg-slate-300 w-[95%]"></div>
                        </div>

                        <div className="text-center text-slate-600 pt-1">
                            <p>
                                You don't have an account?{' '}
                                <Link className="text-blue-500" to="/register">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {/* End Modal */}

            <Footer />
        </div>
    );
};

export default Login;
