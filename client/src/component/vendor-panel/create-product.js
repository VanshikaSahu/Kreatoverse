import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VendorStore } from '../../store/vendor.store'
import Header from '../header.component'

const CreateProduct = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [vendor, setVendor] = useState([])
  useEffect(()=>{
    const _vendor = VendorStore.getVendor()
    if(_vendor._id && _vendor._id.length>0){
      setVendor(_vendor)
    }
    console.log(_vendor)
  },[]) 
  
  const createProduct= async() =>{
    const product = {name, price, category}
    const productDetails = {vendor, product}
    const res = await Axios.post("http://localhost:9000/create-product", productDetails)
    console.log(res.data)
  }  
  const vendorButtons= [{name: "View Products", redirectionLink: "/vendor-products"}, {name: "Create Products", redirectionLink: "/vendor-products/create"}]  
  
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <Header name="Vendor Portal" buttons={vendorButtons}/>
    <div className="px-6 h-full">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
          <div className="block bg-white w-2/5 shadow-lg rounded-lg">       
                <div className="md:p-12 md:mx-6">   
                  <form>
                    <p className="mb-4">Please enter product details</p>
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
                        className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-gray-300 hover:bg-gray-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                        type="button"
                        onClick={createProduct}
                        
                      >
                        Create Product
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

export default CreateProduct

