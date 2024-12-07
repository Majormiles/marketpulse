import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FadeLoader from 'react-spinners/FadeLoader'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import error from '../assets/error.png'
import success from '../assets/success.png'

// Stripe key loading
const load = async () => {
    return await loadStripe('pk_test_51Nk8Y4F0B89ncn3xWB6ZN3GsbVIVL7Jqfa3jxtIOpPkKHcleHZw4EMPJKd4cRwm34ZARBeYmAWwu3VxyYL1gb6OT00UKNSvfvb')
}

const ConfirmOrder = () => {
    const [loader, setLoader] = useState(true)
    const [stripe, setStripe] = useState(null)  // Updated to null to be more explicit
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)  // Error message state for user feedback

    // Load stripe object when component mounts
    useEffect(() => {
        const get_load = async () => {
            try {
                const tempStripe = await load()
                setStripe(tempStripe)
            } catch (err) {
                console.error('Error loading Stripe:', err)
                setErrorMessage('Failed to load Stripe. Please try again later.')
            }
        }
        get_load()
    }, [])

    // Handle payment intent status
    useEffect(() => {
        if (!stripe) return  // Avoid running if stripe is not loaded
        const clientSecret = new URLSearchParams(window.location.search).get('payment_intent_client_secret')
        if (!clientSecret) {
            setErrorMessage('Payment Intent not found.')
            return
        }

        // Retrieve payment intent and check its status
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage('succeeded')
                    break
                case "processing":
                    setMessage('processing')
                    break
                case "requires_payment_method":
                    setMessage('failed')
                    setErrorMessage('Payment failed. Please try a different payment method.')
                    break
                default:
                    setMessage('failed')
                    setErrorMessage('Payment processing failed. Please try again.')
            }
        }).catch(err => {
            console.error('Stripe retrieve error:', err)
            setErrorMessage('An error occurred while verifying the payment. Please try again later.')
        })
    }, [stripe])

    // Update payment status
    const update_payment = async () => {
        const orderId = localStorage.getItem('orderId')
        if (orderId) {
            try {
                const response = await axios.get(`https://marketpulse-api.onrender.com:5000/api/order/confirm/${orderId}`)
                if (response.status === 200) {
                    localStorage.removeItem('orderId')
                    setLoader(false)
                }
            } catch (error) {
                console.log('Error confirming order:', error.response ? error.response.data : error)
                setErrorMessage('Unable to confirm your order. Please try again later.')
            }
        }
    }

    // Handle the success case
    useEffect(() => {
        if (message === 'succeeded') {
            update_payment()
        }
    }, [message])

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col gap-4'>
            {errorMessage && (
                <>
                    <img src={error} alt="error logo" />
                    <p>{errorMessage}</p>
                    <Link className='px-5 py-2 bg-green-500 rounded-sm text-white' to='/dashboard/my-orders'>
                        Back to Dashboard
                    </Link>
                </>
            )}
            {
                (message === 'failed' || message === 'processing') ? (
                    <>
                        <img src={error} alt="error logo" />
                        <Link className='px-5 py-2 bg-green-500 rounded-sm text-white' to='/dashboard/my-orders'>
                            Back to Dashboard
                        </Link>
                    </>
                ) : message === 'succeeded' ? loader ? (
                    <FadeLoader />
                ) : (
                    <>
                        <img src={success} alt="success logo" />
                        <Link className='px-5 py-2 bg-green-500 rounded-sm text-white' to='/dashboard/my-orders'>
                            Back to Dashboard
                        </Link>
                    </>
                ) : (
                    <FadeLoader />
                )
            }
        </div>
    )
}

export default ConfirmOrder
