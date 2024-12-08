
import React from 'react';
import { assets, plans } from '../assets/assets';

const Price = () => {
  return (
    <div className='mx-4 py-3 lg:mx-44 mt-14 min-h-[80vh] text-center'>

      

    <button className='border border-gray-300 px-10 rounded-full py-2 mb-6'>

      Our Plans
    </button>

    <h1 className='text-3xl font-semibold mb-6'>
    Choose the plan that’s right for you
    </h1>


    <div className='flex flex-wrap justify-center items-center gap-6  text-center'>

      {
        plans.map((plan) => (
          <div key={plan.id} className='bg-white rounded-lg px-8 py-6 drop-shadow-sm mt-4 border hover:scale-105  transition-all duration-500 '>
            <img src={assets.logo_icon}alt='logo' className='w-20 h-20 ml-10 ' />
            <h2 className='text-2xl font-bold text-center mb-1 mt-1'>{plan.id}</h2>
            <p className='text-xl text-gray-500 text-center mb-4'>{plan.desc}</p>
            <p className='text-3xl font-bold text-center mb-4'>
               <span>
               ${plan.price}
                </span> 

              /   {plan.credits}
               
               </p>
            
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>Get Started</button>
          </div>
        ))
      }


    </div>




  </div>
  );
}

export default Price;
