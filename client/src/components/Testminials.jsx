
import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testminials = () => {
  return (
    <div className='mx-4  lg:mx-44 py-20  xl:py-10'>
    

      <h1 className='text-4xl  text-center  mt-10 xl:text-5xl font-semibold mb-2'>
      Customer testimonials
      </h1>


      <div className='flex items-start gap-x-3 mt-10'>
        {
            testimonialsData.map((testimonial, index) => (
                <div key={index} className='flex flex-col items-center gap-y-2 bg-white shadow-md p-5'>
                    <img src={testimonial.image} alt='avatar' className='w-20 rounded-full'/>
                    <h3 className='text-lg font-semibold'>{testimonial.name}</h3>
                    <p className='text-gray-700 text-sm text-center'>{testimonial.role}</p>
                    <div className='flex items-center gap-x-1'>
                        {
                            Array.from({ length: testimonial.stars }, (_, index) => (
                                <img key={index} src={assets.star_icon} alt='star_icon' className='w-5'/>
                            ))
                        }
                          </div>

                          <p className='text-gray-700 text-sm text-center'>{testimonial.text}</p>
                </div>
            )
            )
        }
      </div>
    </div>
  );
}

export default Testminials;
