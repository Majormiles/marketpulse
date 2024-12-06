import React from 'react'
import Carousel from 'react-multi-carousel'
import  'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
const Banner = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div className='w-full md-lg:mt-5 md:flex-col mx-auto block flex md:w-[90%] '>
            <div className='w-[65%] lg:w-[90%] mx-auto ml-6 md:ml-2'>
                <div className='w-full flex flex-wrap md-lg:gap-7'>
                    <div className='w-full'>
                        <div className='my-8'>
                            <Carousel
                                autoPlay={true}
                                infinite={true}
                                arrows={false}
                                showDots={false}
                                responsive={responsive}
                            >
                                {
                                    [1, 2, 3, 4, 5, 6, 7].map((img, i) => <Link className='lg-md:h-[200px] h-auto w-full block' key={i} to='#'>
                                        <img src={`https://marketpulse-oxxa.onrender.com/images/banner/${img}.jpg`} alt="" />
                                    </Link>)
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* <div class="col-md-6 ml-5 mt-8 md:w-[100%] w-[30%] mr-5 md:hidden md:block">
                <img src="/images/adbanner.gif"  />
            </div> */}


            <div className="col-md-6 ml-5 mt-8 md:w-[100%] w-[30%] mr-5 md:hidden md:block">
                   <Carousel
                                autoPlay={true}
                                infinite={true}
                                arrows={false}
                                showDots={false}
                                responsive={responsive}
                            >
                                {
                                    [1, 2, 3,].map((img, i) => <Link className='lg-md:h-[200px] h-auto w-full block' key={i} to='#'>
                                        <img src={`https://marketpulse-oxxa.onrender.com/images/add/${img}.gif`} alt="" />
                                    </Link>)
                                }
                            </Carousel>
            </div>

        </div>
        
    )
}

export default Banner