import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { VendorStore } from '../../store/vendor.store'
import Header from '../header.component'

const VendorDetails = () => {
  const[vendor, setVendor] = useState({})
  useEffect(()=>{
    const _vendor = VendorStore.getVendor()
    if(_vendor._id && _vendor._id.length>0){
      setVendor(_vendor)
    }
  },[])

  const adminButtons= [{name: "View Vendors", redirectionLink: "/vendors"}, {name: "Create Vendors", redirectionLink: "/vendors/create"}]  

  return (
    <div className='bg-gray-200'>
      <Header name="Admin Portal" buttons={adminButtons}/>
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">Vendor Details</h1>
      <div className='flex w-full'>
        <section className="h-full gradient-form bg-gray-200 md:h-screen w-1/2">
        <div className="py-12 px-6 ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
              <div className="block bg-white shadow-lg rounded-lg">       
                    <div className="md:p-12 md:mx-6 text-lg">   
                     <span className='font-bold'> Name: </span> {vendor.name}    
                  </div>  
                  <hr></hr>
                  <div className="md:p-12 md:mx-6">   
                  <span className='font-bold'>email: </span>{vendor.email}    
                  </div> 
                  <hr></hr> 
                  <div className="md:p-12 md:mx-6">   
                  <span className='font-bold'>address: </span> {vendor.address}    
                  </div>  
                  <hr></hr>   
                  <div className="md:p-12 md:mx-6">   
                  <span className='font-bold'>phone:</span> {vendor.phoneNumber}    
                  </div>  
                  <div className="md:p-12 md:mx-6">   
                  <span className='font-bold'>phone:</span> {vendor.phoneNumber}    
                  </div>  
                  <hr></hr>  
              </div>
          </div>
        </div>
      </section>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="py-12 px-6 ">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
              <div className="block bg-white shadow-lg rounded-lg p-10">       
                  <div className='items-center text-lg font-bold'>Vendor Products</div>
                    <div className="overflow-x-auto relative pl-2 mt-10 mx-8">
      <table className="table-auto w-full text-sm border-purple-800 border-x-[1px] border-t-[1px]">
          <thead className="">
              <tr  className="border-b border-purple-800 bg-purple-300">
                <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                      Product Name
                  </th>
                  <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                      Price
                  </th>
                  <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                      Category
                  </th>
                 
              </tr>
          </thead>
          <tbody>
              {vendor.products && vendor.products.map((product)=>{
                  return<tr className="bg-white border-b border-purple-300 ">
                      <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                        {product.name}
                      </th>
                      <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                        {product.price}
                      </th>
                      <th scope="row" className="py-6 px-6 font-medium roun whitespace-nowrap border-l border-purple-800">
                        {product.category}
                      </th>
                    
                  </tr>
              })}  
          </tbody>
      </table>
  </div>
                  
              </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default VendorDetails
