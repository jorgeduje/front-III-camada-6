import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { updateProduct } from '../../../services/productServices'

const ProductDetailContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()
  

  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
      .then (res => setProduct(res.data))
  }, [])

  const updateProductById = ()=>{
    updateProduct(id, {price: 6000, name: "zapas X",})
  }
    
  return (
    <div>
        <ProductDetail updateProductById={updateProductById} product={product} />
    </div>
  )
}

export default ProductDetailContainer