import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ProductStore } from '../../store/product.store'
import { VendorStore } from '../../store/vendor.store'
import Header from '../header.component'

const ProductList = () => {
  const navigate = useNavigate()
  const params = useParams();
  const [products, setProducts] = useState([])
  const vendorButtons= [{name: "View Products", redirectionLink: `/vendor-products/${params.id}`}, {name: "Create Products", redirectionLink: `/vendor-products/${params.id}/create`}]
  
  
  useEffect(()=>{
    getVendorProducts(params.id)
  },[])

  const getVendorProducts = async(id) =>{
    const res = await Axios.get(`http://localhost:9000/vendor/get-products/${id}`)
    setProducts(res.data)
  }

  const gotToEdit = (product) =>{
    ProductStore.setProduct(product)
    navigate(`update`)
  }

  return (
    <div>
     <Header name="Vendor Portal" buttons={vendorButtons}/>
     {products && products.length>0 &&
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
                  <th scope="col" className=" py-8 font-montserratLight border-l border-purple-800 text-lg">
                     
                  </th>
              </tr>
          </thead>
          <tbody>
              {products.map((product)=>{
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
                      <th scope="row" className="py-6 px-6 font-medium whitespace-nowrap border-l border-purple-800">
                        <button onClick={()=>{gotToEdit(product)}} className='bg-purple-300 p-6 px-8 rounded-2xl' >View Details</button>
                      </th>
                  </tr>
              })}  
          </tbody>
      </table>
  </div>
     }

    {products && products.length===0 &&
    <div>
      <div className='my-4 text-2xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1'>Currently you have added no products</div>
      <button className='m-4 text-xl bg-purple-300 p-8 rounded-3xl'>Click here to create Products</button>
    </div>
    }
    </div>
  )
}

export default ProductList
