import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SecurityManager } from '../security/security.manager'

const Header = (props) => {
  const {name, buttons} = props
  const navigate = useNavigate()
  return (
    <div className="w-full flex items-center justify-between bg-black p-10">
    <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="#"> 
     {name}
    </a>      
    <div className="flex w-1/2 justify-end content-center">	
    {buttons.map(button=>{
        return <button onClick={()=>{navigate(button.redirectionLink)}} className='p-2 rounded-lg mr-5 hover:shadow-lg text-indigo-400 font-bold'>{button.name}</button>
      })}	

<button onClick={()=>{SecurityManager.logout()}} className='p-2 rounded-lg mr-5 hover:shadow-lg text-indigo-400 font-bold'>Logout</button>
      
    </div>       
  </div>
  )
}

export default Header
