import React from 'react'
import { Link } from "react-router-dom";
import main_banner from '../assets/aka.png';
import white_arrow_icon from '../assets/white_arrow_icon.png' ;

const MainBanner = () => {
  return (
    <div className='relative'>
<img 
  src={main_banner} 
  alt="Main Banner" 
  className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-lg"
/>
      <img src={main_banner} alt="Main Banner" className='w-full md:hidden'/>
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'> 
        <h1
          className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'
          style={{ color: 'black' }}  // beige color
        >
          Replast - Redefining Plastic Recycling
        </h1>
      <div className='flex items-center mt-6 font medium'>
        <Link
          to="/products"
          className="group flex items-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dull 
                    text-white rounded-full shadow-md transition-all duration-200"
        >
          <span className="font-medium">Shop now</span>
          <img
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
            src={white_arrow_icon}
            alt="arrow"
          />
        </Link>

        {/* Desktop Button */}
        <Link
          to="/products"
          className="group hidden md:flex items-center gap-2 px-7 py-2 bg-white text-primary 
                    border border-primary hover:bg-primary hover:text-white rounded-full 
                    shadow-sm transition-all duration-200"
        >
          <span className="font-medium">Explore deals</span>
          <img
            className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
            src={white_arrow_icon}
            alt="arrow"
          />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
