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

  return (
    <div>
      <Header/>
    </div>
  )
}

export default VendorDetails
