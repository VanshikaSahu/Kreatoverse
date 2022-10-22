import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { VendorStore } from '../../store/vendor.store'
import Header from '../header.component'

const VendorList = (props) => {
  const navigate = useNavigate()
  const [vendors,setVendors] = useState([])
  useEffect(()=>{
    fetchVendors()
  },[])

  const fetchVendors = async() =>{
    const res = await Axios.get("http://localhost:9000/get-vendors")
    setVendors(res.data)
  }

  const goToEdit = (vendor) => {
    console.log(vendor)
    VendorStore.setVendor(vendor)
    navigate(`/vendors/${vendor._id}`)
}
const adminButtons= [{name: "View Vendors", redirectionLink: "/vendors"}, {name: "Create Vendors", redirectionLink: "/vendors/create"}]  

  return (
    <div>
      <Header name="Admin Portal" buttons={adminButtons}/>
      <div className="overflow-x-auto relative pl-2 mt-10 mx-8">
            <table className="table-auto w-full text-sm border-purple-800 border-x-[1px] border-t-[1px]">
                <thead className="">
                    <tr  className="border-b border-purple-800 bg-purple-300">
                      <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                            Vendor Name
                        </th>
                        <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                            Email
                        </th>
                        <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                            Phone
                        </th>
                        <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                           
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {vendors.map((vendor)=>{
                        return<tr className="bg-white border-b border-purple-300 ">
                            <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                              {vendor.name}
                            </th>
                            <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                              {vendor.email}
                            </th>
                            <th scope="row" className="py-6 px-6 font-medium roun whitespace-nowrap border-l border-purple-800">
                              {vendor.phoneNumber}
                            </th>
                            <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                              <button className='bg-purple-300 p-6 px-8 rounded-2xl' onClick ={()=>{goToEdit(vendor)}}>View Details</button>
                            </th>
                        </tr>
                    })}  
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default VendorList
