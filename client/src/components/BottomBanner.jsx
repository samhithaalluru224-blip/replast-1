import React from 'react'
import assets, { features } from '../assets/assets.js';

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full h-[180px] md:h-[250px] object-cover"
      />

      {/* Centered content */}
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
        <h1 className='text-2xl md:text-3xl font-semibold text-white mb-6'>
          Why We Are the Best?
        </h1>

        <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
          {features.map((feature, index) => (
            <div key={index} className='flex flex-col items-center text-center max-w-[200px]'>
              <img src={feature.icon} alt={feature.title} className='w-10 h-10 mb-2' />
              <h3 className='text-lg md:text-xl font-semibold text-white'>
                {feature.title.replaceAll('_', ' ')}
              </h3>
              {/* <p className='text-gray-300 text-xs md:text-sm'>
                {feature.description}
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomBanner
