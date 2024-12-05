import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Categorys = () => {

    const { categorys } = useSelector(state => state.home)

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3001 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1025 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 465 },
            items: 2
        },
        mdtablet: {
            breakpoint: { max: 991, min: 465 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 1
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        }
    };
    
    // return (
    //     <div className='w-[87%] mx-auto relative'>

    //         <Carousel
    //             autoPlay={true}
    //             infinite={true}
    //             arrows={true}
    //             responsive={responsive}
    //             transitionDuration={500}
    //         >
    //             {
    //                 categorys.map((c, i) => <Link className='h-[130px] w-[180px] border block gap-5' key={i} to='#'>
    //                     <div className='w-full h-full relative p-3'>
    //                         <img src={c.image} alt="image" />
    //                         <div className='absolute bottom-6 w-full mx-auto font-bold left-0 flex justify-center items-center'>
    //                             <span className='py-[2px] px-6 bg-[#3330305d] text-white'>{c.name}</span>
    //                         </div>
    //                     </div>
    //                 </Link>)
    //             }
    //         </Carousel>

    //     </div>
    // )
}

export default Categorys