
import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {

    
  return (
    <div className='flex items-center  flex-col px-4 mt-20 '>
      
      <div className='flex flex-col w-50 mb-2'>
        <input type='text' placeholder='Enter text here' className='px-4 py-2 border-2 border-gray-300 rounded-lg'/>
        <h2 className='text-4xl   mt-10 xl:text-5xl font-semibold mb-2'> 
        Turn text to image, in seconds.
        </h2>

        <p className='text-gray-700 text-sm mb-10'>
        Unleash your creativity with AI. Turn  <br/> your imagination into visual art in seconds – just type, and watch the magic happen.
        </p>

        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>
           Generated Image
        </button>

      </div>

      <div className='flex items-center justify-center gap-x-2 w-20 mt-10'>
      <img src={assets.sample_img_1} alt='sample_img_1' className='w-50'/>
      <img src={assets.sample_img_1} alt='sample_img_1' className='w-50'/>
      <img src={assets.sample_img_1} alt='sample_img_1' className='w-50'/>
      <img src={assets.sample_img_1} alt='sample_img_1' className='w-50'/>

     


      </div>

      <h3 className='text-gray-700 text-sm mt-4'>
        Here are some examples of the images you can create with our platform.
      </h3>



    </div>
  );
}

export default Header;
