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
    <section className="gradient-form bg-gray-200 h-screen">
    <div className="px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
          <div className="block bg-white shadow-lg rounded-lg"> 
          <h1 className="my-4 text-3xl md:text-5xl p-10 text-purple-800 font-bold leading-tight text-center  slide-in-bottom-h1">Please login to continue.</h1>      
                <div className="p-12 pt-0 mx-6 flex justify-between">   
                <button onClick={()=>{navigate('/vendor-login')}} className='p-20 rounded-lg mr-5 bg-purple-300 hover:bg-purple-500 hover:shadow-lg font-bold text-lg'>Vendor Login</button>
                <button onClick={()=>{navigate('/admin-login')}} className='p-20 rounded-lg mr-5 bg-purple-300 hover:bg-purple-500 hover:shadow-lg font-bold text-lg'>Admin Login</button>     
              </div>     
          </div>
      </div>
    </div>
  </section>
   
  )
}

export default LoginComponent
