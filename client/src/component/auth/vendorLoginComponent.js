import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SecurityManager } from '../../security/security.manager'
import { VendorStore } from '../../store/vendor.store'

const VendorLoginComponent = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const Login = async() =>{
      const loginDetails = {email, password}
      const res = await Axios.post("http://localhost:9000/vendor-login", loginDetails)
      console.log(res)
      if(res.data.status==="success"){
        VendorStore.setVendor(res.data.data)
        const session = {
          id:  1,
          token: "gdjgsjfuweyejsb",
          vendorloggedIn: true,
          adminloggedIn: false
        }
        SecurityManager.setSession(session)
        if (SecurityManager.vendorloggedIn()) {
          navigate('/vendor-products')
      }
      }    
  }

  useEffect(() => {
    if (SecurityManager.vendorloggedIn()) {
        navigate('/vendor-products')
    }
  })

  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white shadow-lg rounded-lg">       
                  <div className="md:p-12 md:mx-6">   
                    <form>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="email"
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Password"
                          onChange={(e)=>{setPassword(e.target.value)}}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md bg-gray-300 hover:bg-gray-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={Login}
                        >
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          Register
                        </button>
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

