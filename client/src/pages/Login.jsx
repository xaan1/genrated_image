
import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import { AppContext } from '../contex/AppContex'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {


  const [state , setState]  =  useState("login")

  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")


  const {backendUrl,  token, setToken} = useContext(AppContext)


  const navigate = useNavigate()

  
  useEffect(() => {

    if(token){
      navigate("/")
    }

  },[token])


  const handlesubmit = async(e) => {
    e.preventDefault()
  

    try {

      if(state === "login") {
        // login logic
      
        const {data} = await axios.post(`${backendUrl}/api/users/login`, {
     
          email,
          password
        }
        )
        console.log(data)

        if(data.success) {
          toast.success(data.massage)
          setToken(data.token)
          localStorage.setItem('token', data.token)
        }
     

    

      } else {
        // register logic
        const {data} = await axios.post(`${backendUrl}/api/users/registrar`, {
          name,
          email,
          password
        }
        )
        console.log(data)

        if(data.success) {
          toast.success(data.massage)
          setState("login")
        }
      }

    
    }  catch (error) {
      console.log(error)
  }
}
  
  return (
    <div className='mx-4  lg:mx-44 py-20  xl:py-10 '>


      <div className='flex flex-col items-center gap-y-4 mt-20  '>
      


        <form  onSubmit={handlesubmit}   className='flex flex-col gap-y-4 w-96 bg-white shadow-md p-2'>

        <h1 className='text-4xl font-bold text-center mt-5'>
           {
              state === "login" ? "Login" : "Register"
           }
        </h1>

          <div className='flex flex-col gap-y-2 p-4'>
            {
              state === "register" && (
                <>
                  <label htmlFor='name'>Enter Your Name</label>
                  <input  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  
                  type='name' id='name' placeholder='Enter Your Name' className='p-2 border border-gray-300 rounded-md' />
                </>
              )
            }

            <label htmlFor='email'>Email</label>
            <input        value={email}
                  onChange={(e) => setEmail(e.target.value)} type='email' id='email' placeholder=' Enter Your Email' className='p-2 border border-gray-300 rounded-md' />

            <label htmlFor='password'>Password</label>
            <input        value={password}
                  onChange={(e) => setPassword(e.target.value)} type='password' id='password' placeholder='Enter Your Password' className='p-2 border border-gray-300 rounded-md' />
          </div>

          

          <button type='submit' className='bg-blue-500 text-white p-2 rounded-md mb-10' >
            {
              state === "login" ? "Login" : "Register"
            }
          </button>

          <div className='flex gap-x-4 items-center justify-center'>
            <p>
              {
                state === "login" ? "Don't have an account?" : "Already have an account?"
              }
            </p>
            <p className='cursor-pointer text-gray-700' onClick={() => setState(state === "login" ? "register" : "login")}>
              {
                state === "login" ? "Register" : "Login"
              }
            </p >
        </div>

        </form>

       
       
      </div>
      
      <Toaster />
    </div>
  )
}

export default Login