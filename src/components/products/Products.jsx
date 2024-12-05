import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Products = ({ title, products }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3001 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1025 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 463, min: 0 },
            items: 1
        }
    };


    const ButtonGroup = ({ next, previous }) => {
        return (
            <div className='flex justify-between items-center'>
                <div className='text-xl font-bold text-slate-600'>{title}</div>
                <div className='flex justify-center items-center gap-3 text-slate-600'>
                    <button onClick={() => previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200'>
                        <span><FiChevronLeft /></span>
                    </button>
                    <button onClick={() => next()} className='w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200'>
                        <span><FiChevronRight /></span>
                    </button>
                </div>
            </div>
        )
    }
    

    return (
        <div className='flex gap-8 flex-col-reverse'>
            <Carousel
                autoPlay={false}
                infinite={false}
                arrows={false}
                responsive={responsive}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
            >
                {products.map((group, i) => (
                    <div key={i} className='flex flex-col justify-start gap-10'>
                        {group.map((product, j) => (
                            <Link key={j} className='flex justify-start items-start' to='#'>
                                {/* Adjusted image dimensions */}
                                <img className='w-[60px] h-[40px]' src={product.images[0]} alt={product.name} />
                                <div className='px-5 flex justify-start items-start gap-1 flex-col text-slate-600'>
                                    <h2>{product.name}</h2>
                                    <span className='text-lg font-bold'>GH₵{product.price}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Products
