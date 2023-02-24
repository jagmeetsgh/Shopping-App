import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Index = () => {
  const [product, setProduct] = useState([]);
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchItem = async() => {
      const item = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`)
      setProduct(item.data.data)
    }
    fetchItem();
  },[id])

  if(product.length === 0) return <h1>Loading..</h1>

  return (
    <Box sx={{textAlign:'center'}}>
      <h1>{product.attributes.name}</h1>
      <h2>$ {product.attributes.price}</h2>
      <button onClick={() => navigate('/')} >Back</button>
    </Box>
  )
}

export default Index