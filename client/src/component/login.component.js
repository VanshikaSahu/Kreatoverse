import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SecurityManager } from '../security/security.manager'

const LoginComponent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (SecurityManager.loggedIn()) {
        navigate('/')
    }
  })
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
    <div className="px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
          <div className="block bg-white w-2/5 shadow-lg rounded-lg"> 
          <h1 className="my-4 text-3xl md:text-5xl p-10 text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Please login to continue.</h1>      
                <div className="md:p-12 md:mx-6">   
                <button onClick={()=>{navigate('/vendor-login')}} className='p-16 rounded-lg mr-5 bg-purple-300 hover:bg-purple-500 hover:shadow-lg font-bold text-lg'>Vendor Login</button>
                <button onClick={()=>{navigate('/admin-login')}} className='p-16 rounded-lg mr-5 bg-purple-300 hover:bg-purple-500 hover:shadow-lg font-bold text-lg'>Admin Login</button>     
              </div>     
          </div>
      </div>
    </div>
  </section>
   
  )
}

export default LoginComponent
