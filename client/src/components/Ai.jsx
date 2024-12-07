
import React from 'react';
import { assets } from '../assets/assets';

const Ai = () => {
  return (
    <div className='mx-4  lg:mx-44 py-20  xl:py-10 '>
        <h1 className='text-4xl  text-center  mt-10 xl:text-5xl font-semibold mb-40'>
        Create AI Images
        </h1>



  <div className='flex items-start gap-x-3 mt-10'>



    {/* left side */}



    <div className="w-1/2">
        <img src={assets.sample_img_1} alt='sample_img_1' className='w-50'/>
    </div>





    <div className="w-1/2">

        <h1 className='text-4xl  text-center  mt-10 xl:text-5xl font-semibold mb-2'>
        Introducing the AI-Powered Text to Image Generator
        </h1>

        <p className='text-gray-700 text-sm mb-10 text-center mt-5  '>
        Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
        </p>

        <p className= " text-gray-700 text-sm mt-5 text-center">
        Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
        </p>
    </div>





  </div>





    </div>
  );
}

export default Ai;
