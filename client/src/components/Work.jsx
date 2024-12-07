
import React from 'react';
import { stepsData } from '../assets/assets';

const Work = () => {
  return (
    <div className='mx-4  lg:mx-44 py-20  xl:py-10 '>
    

    <h1 className='text-4xl  text-center  mt-10 xl:text-5xl font-semibold mb-2'>
    How it works
    </h1>

    <p className='text-gray-700 text-sm mb-10 text-center '>
    Transform Words Into Stunning Images
    </p>


    <div className='flex items-center justify-center gap-x-6 w-full  mx-auto mb-10'>
        {
            stepsData.map((step, index) => (
                <div key={index} className='flex   items-center gap-x-2 bg-white shadow-md px-4 p-5'>
                    <img src={step.icon} alt='step_icon' className='w-20'/>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold'>{step.title}</h3>
                        <p className='text-gray-700 text-sm'>{step.description}</p>
                        </div>
                </div>
            ))
        }
    </div>
      
    </div>
  );
}

export default Work;
