import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import { useParams } from "react-router-dom"
import axios from 'axios'

const ProductDetailContainer = () => {

  const [product, setProduct] = useState({})

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    axios.get(`http://localhost:5000/products/${id}`)
      .then (res => setProduct(res.data))
  }, [])
    
  return (
    <div>
        <ProductDetail product={product} />
    </div>
  )
}

export default ProductDetailContainer