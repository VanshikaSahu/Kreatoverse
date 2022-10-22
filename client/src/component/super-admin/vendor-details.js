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
    <div>
      <Header name="Admin Portal" buttons={adminButtons}/>
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">Vendor Details</h1>
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <div className="py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white shadow-lg rounded-lg">       
                  <div className="md:p-12 md:mx-6">   
                    Name: {vendor.name}    
                </div>  
                <div className="md:p-12 md:mx-6">   
                    email: {vendor.email}    
                </div>  
                <div className="md:p-12 md:mx-6">   
                    address: {vendor.address}    
                </div>     
                <div className="md:p-12 md:mx-6">   
                    phone: {vendor.phone}    
                </div>    
            </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default VendorDetails
