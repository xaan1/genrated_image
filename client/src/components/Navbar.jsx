
import React from 'react';
import { SignOutButton, useAuth, useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {

  const {openSignIn} = useClerk();

  const {user , isSignedIn , }  = useUser();
  return (
    <div className='flex items-center justify-between  mx-4 py-3 lg:mx-44'>
    
    <h1 className='text-2xl font-bold'>
        Logo
    </h1>

    <div className='flex items-center gap-x-3'>

      <h4 className='text-gray-700 font-semibold'>
        Price
      </h4>

      {
        isSignedIn  ?  (
          <>
                  <UserButton />
          </>
        ) : 
        (
          <>
          
        <button

onClick={() => openSignIn()}

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
