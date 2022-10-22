import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './header.component'

const MainComponent = () => {
  const navigate = useNavigate()
  return (
      <div className="h-screen pb-14 bg-right bg-cover bg-blue-300">
        <div className="w-full mx-auto">      
         <Header/>
        </div>
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">       
          <div className="flex flex-col w-2/4 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Welcome to the admin Portal</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">You can create vendors and track their activities</p>
          </div>
          <div className="flex w-1/2 justify-end content-center">		
              <button onClick={()=>{navigate('/vendors')}} className='p-16 rounded-lg mr-5 bg-gray-300 hover:bg-gray-400 hover:shadow-lg font-bold text-lg'>View Vendors</button>
              <button onClick={()=>{navigate('/vendors/create')}} className='p-16 rounded-lg bg-gray-300 hover:bg-gray-400 hover:shadow-lg font-bold text-lg'>Create Vendors</button>
            </div>  

        </div>
      </div>
  )
}

export default MainComponent
