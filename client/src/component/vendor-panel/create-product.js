import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../header.component'

const CreateProduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [message, setMessage] = useState("")
  const params = useParams();
  
  const createProduct= async() =>{
    if(name==="" || price=== "" || category===""){
      setMessage("Please fill all the details to create product")
      setTimeout(()=>{
        setMessage("")
      }, 3000)
      return
    }
    const productDetails = {name, price, category, vendorID: params.id}
    const res = await Axios.post(`http://localhost:9000/vendor/create-product`, productDetails)
    setMessage(res.data.message)
    setTimeout(()=>{
      setMessage("")
    }, 3000)
    navigate(`/vendor-products/${params.id}`)
  }  
  const vendorButtons= [{name: "View Products", redirectionLink: `/vendor-products/${params.id}`}, {name: "Create Products", redirectionLink: `/vendor-products/${params.id}/create`}]  
  
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <Header name="Vendor Portal" buttons={vendorButtons}/>
      <div className="px-6 mt-20">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white w-2/5 shadow-lg rounded-lg">       
                  <div className="md:p-12 md:mx-6">   
                    <form>
                      <p className="mb-4 text-purple-500">Please enter product details</p>
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
                          type="number"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="price"
                          onChange={(e)=>{setPrice(e.target.value)}}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Category"
                          onChange={(e)=>{setCategory(e.target.value)}}
                        />
                      </div>
                      
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button
                          className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-400 hover:bg-blue-500 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={createProduct}
                          
                        >
                          Create Product
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

export default CreateProduct

