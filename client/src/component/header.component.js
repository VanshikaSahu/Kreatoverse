import React from 'react'

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-black p-10">
    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
     ADMIN PORTAL
    </a>      
    <div className="flex w-1/2 justify-end content-center">		
    <button className='p-2 rounded-lg mr-5 hover:shadow-lg text-indigo-400 font-bold'>View Vendors</button>
      <button className='p-2 rounded-lg hover:shadow-lg text-indigo-400 font-bold'>Create Vendors</button>
    </div>       
  </div>
  )
}

export default Header
