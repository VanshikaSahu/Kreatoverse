import React, { useState } from 'react'
import Header from '../header.component'

const CreateVendor = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <Header/>
    <div className="px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
          <div className="block bg-white w-2/5 shadow-lg rounded-lg">       
                <div className="md:p-12 md:mx-6">   
                  <form>
                    <p className="mb-4">Please enter vendor details</p>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlInput1"
                        placeholder="name"
                        onChange={(e)=>{setEmail(e.target.value)}}
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
                        className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-gray-300 hover:bg-gray-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        
                      >
                        Create vendor
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

export default CreateVendor
