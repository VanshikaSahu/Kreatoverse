import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../header.component'

const CreateVendor = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [emailError, setEmailError] = useState("")

  const createVendor = async() =>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!validRegex.test(email)){
      console.log("fsfsf")
      setEmailError("Please enter a valid email")
      setTimeout(() => {
        setEmailError("")
      }, 3000);
      return 
    }
    if(name==="" || email=== "" || phone==="" || address===""){
      setMessage("Please fill all the details to create product")
      setTimeout(()=>{
        setMessage("")
      }, 3000)
      return
    }
    const vendorDetails = {name, email, phone, address}
    const res = await Axios.post("http://localhost:9000/create-vendor", vendorDetails)
    if(res.data.status ==="error"){
      setMessage(res.data.message)
      setTimeout(()=>{
        setMessage("")
      }, 3000)
    }
    if(res.data.status==="success"){
      alert(res.data.message)
      navigate("/vendors")
    }
  }  
    const adminButtons= [{name: "View Vendors", redirectionLink: "/vendors"}, {name: "Create Vendors", redirectionLink: "/vendors/create"}]  
  
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <Header name="Admin Portal" buttons={adminButtons}/>
      <div className="px-6">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white w-2/5 shadow-lg rounded-lg mt-20">       
                  <div className="md:p-12 md:mx-6">   
                    <form>
                      <p className="mb-4 text-lg text-purple-500">Please enter Vendor details</p>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="name"
                          onChange={(e)=>{setName(e.target.value)}}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="email"
                          onChange={(e)=>{setEmail(e.target.value)}}
                        />
                        <span className='text-red-500'>{emailError} </span>
                      </div>
                      <div className="mb-4">
                        <input
                          type="number"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Phone"
                          onChange={(e)=>{setPhone(e.target.value)}}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Address"
                          onChange={(e)=>{setAddress(e.target.value)}}
                        />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-400 hover:bg-blue-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={createVendor}
                          
                        >
                          Create vendor
                        </button>
                      </div>
                    </form>      
                    <div className='text-center text-red-500 text-xl font-bold'>{message}</div>              
                </div>     
            </div>
        </div>
      </div>
  </section>
  )
}

export default CreateVendor
