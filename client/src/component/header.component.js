import React from 'react'

const Header = (props) => {
  return (
    <div className="w-full flex items-center justify-between bg-black p-10">
    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
     Analyze any web or app
    </a>      
    <div className="flex w-1/2 justify-end content-center">	 
    </div>       
  </div>
  )
}

export default Header
