import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './header.component'

const MainComponent = (props) => {
  const {name, desc, buttons} = props
  const navigate = useNavigate()
  return (
      <div className="h-screen pb-14 bg-right bg-cover bg-blue-300">
        <div className="w-full mx-auto">      
         <Header name= {name} buttons={buttons}/>
        </div>
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">       
          <div className="flex flex-col w-2/4 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Welcome to the {name}</h1>
            <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">{desc}</p>
          </div>
          <div className="flex w-1/2 justify-end content-center">		
              {buttons.map(button=>{
                return <button onClick={()=>{navigate(button.redirectionLink)}} className='p-16 rounded-lg mr-5 bg-gray-300 hover:bg-gray-400 hover:shadow-lg font-bold text-lg'>Click here to {button.name}</button>
              })}
            </div>  

        </div>
      </div>
  )
}

export default MainComponent
