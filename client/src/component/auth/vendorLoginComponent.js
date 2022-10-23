import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../../constant/base.constant'
import { SecurityManager } from '../../security/security.manager'

const VendorLoginComponent = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [message, setMessage] = useState("")
  
  const Login = async() =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!validRegex.test(email)){
      setEmailError("Please enter a valid email")
      setTimeout(() => {
        setEmailError("")
      }, 3000);
      return 
    }
      const loginDetails = {email, password}
      const res = await Axios.post(`${SERVER_URL}/vendor-login`, loginDetails)
      if(res.data.status==="error"){
        setMessage(res.data.message)
        setTimeout(() => {
          setMessage("")
        }, 3000);
        return
      }
      if(res.data.status==="success"){
        const session = {
          id:  1,
          token: "gdjgsjfuweyejsb",
          loggedIn: true,
          vendorloggedIn: true,
          adminloggedIn: false,
          vendorId: res.data.data._id
        }
        SecurityManager.setSession(session)
        if (SecurityManager.vendorloggedIn()) {
          navigate(`/`)
      }
      }    
  }

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="py-12 px-6">
      <div className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">Welcome to the vendor Portal</div> 
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white shadow-lg rounded-lg mt-10">       
                  <div className="md:p-12 md:mx-6">   
                    <form>
                      <p className="mb-4 text-purple-500">Please enter the password sent to your email</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="email"
                          name="email"
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <span className='text-red-500'>{emailError} </span>
                      </div>
                      
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                          name="password"
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-400 hover:bg-blue-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={Login}
                        >
                          Log in
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2 text-red-500 text-xl">{message}</p>
                      </div>
                    </form>           
                </div>     
            </div>
        </div>
      </div>
    </section>
  )
}

export default VendorLoginComponent

