import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ProductStore } from '../../store/product.store'
import Header from '../header.component'

const UpdateProduct = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState()
  const params = useParams()
  const [showModal, setShowModal] = useState(false);
  
  useEffect(()=>{
    const _product = ProductStore.getProduct()
    setProduct(_product)
  },[]) 
  
  const updateProduct= async() =>{
    const productDetails = {name: product.name, price: product.price, category: product.category}
    const res = await Axios.put(`http://localhost:9000/vendor/update-product/${product._id}`, productDetails)
    if(res.data.status ==="success"){
      navigate(`/vendor-products/${params.id}`)
    }
  }  

  const deleteProduct = async() =>{
    const res = await Axios.delete(`http://localhost:9000/vendor/delete-product/${product._id}`)
    setShowModal(false)
    navigate(`/vendor-products/${params.id}`)
  }

  const handleChange= (e) =>{
    const { name, value } = e.target;
    setProduct((pre) => ({
        ...pre, [name]: value
    }))}

  const vendorButtons= [{name: "View Products", redirectionLink: `/vendor-products/${params.id}`}, {name: "Create Products", redirectionLink: `/vendor-products/${params.id}/create`}]  
  
  return (
    <section className="h-full gradient-form bg-gray-200 md:h-screen">
      <Header name="Vendor Portal" buttons={vendorButtons}/>
      {product && 
      <>
      <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">Update {product.name} </h1>
      <div className="px-6 mt-20">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800"> 
            <div className="block bg-white w-2/5 shadow-lg rounded-lg">       
                  <div className="md:p-12 md:mx-6">   
                    <form>
                      <p className="mb-4 text-xl font-bold text-purple-500">Update your product</p>
                      <label className='text-lg font-bold'>Name:</label>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="name"
                          name="name"
                          value={product.name}
                          onChange={(e)=>{handleChange(e)}}
                        />
                      </div>
                      <label className='text-lg font-bold'>Price:</label>
                      <div className="mb-4">
                        <input
                          type="number"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="price"
                          name="price"
                          value={product.price}
                          onChange={(e)=>{handleChange(e)}}
                        />
                      </div>
                      <label className='text-lg font-bold'>Category:</label>
                      <div className="mb-4">
                        <input
                          type="text"
                          className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleFormControlInput1"
                          placeholder="Category"
                          name="category"
                          value={product.category}
                          onChange={(e)=>{handleChange(e)}}
                        />
                      </div>
                      
                      <div className="text-center pt-1 mb-12 pb-1 flex gap-2">
                        <button
                          className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-500 hover:bg-blue-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={updateProduct}                
                        >
                          Update Product
                        </button>
                        <button
                          className="inline-block px-6 py-4 font-medium text-xs leading-tight uppercase rounded shadow-md bg-red-500 hover:bg-red-400 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={()=>{setShowModal(true)}}                
                        >
                          Delete Product
                        </button>
                      </div>
                    </form>           
                </div>     
            </div>
        </div>
      </div>
      </>
      }

    {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Delete Product
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Are you sure you want to delete the product
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() =>{ deleteProduct()}}
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

  </section>
  )
}

export default UpdateProduct

