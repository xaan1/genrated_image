
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contex/AppContex';
import { assets } from '../assets/assets';


const Navbar = () => {



  const navigate = useNavigate()
  const {backendUrl,  token, setToken , user} = useContext(AppContext)

  
  const logout = () => {
                                  
    token && setToken("")
    token && localStorage.removeItem("token")
    navigate("/login")
}


const [credit , setCredit]   = useState(user?.creditBalance)

  return (
    <div className='flex items-center justify-between  mx-4 py-3 lg:mx-44'>
    
    <h1  onClick={() => navigate("/")} className='text-2xl font-bold cursor-pointer'>
        Logo
    </h1>

    <div className='flex items-center gap-x-3'>

       <h4  onClick={() => navigate("/price")} className='text-gray-700 font-semibold  text-2xl cursor-pointer'>
        Price
      </h4> 

      {
        token  ?  (
          <div className='flex items-center gap-2 lg:gap-3'>
          <button
    
          className='flex items-center gap-2 bg-white text-zinc-800 px-4 py-2 sm:py-3 text-sm rounded-full'
          >
            <img src={assets.credit_star} alt='credit' className='w-6' />
            <span className='text-zinc-800 font-semibold'>{credit}</span>
          </button>
          <p onClick={logout} className='text-zinc-800 font-semibold hidden sm:block'>
          log out
          </p>
    

      
        </div>
        ) : 
        (
          <>
          
        <button

        onClick={() => navigate('/login')}


className='mx-2 px-4 py-2 bg-blue-500 text-white rounded-lg'>
    Login
</button>
          </>
        )
     
      }




    </div>

    </div>
  );
}

export default Navbar;
