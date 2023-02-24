import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const About = () => {

  let param = useParams();
  let navigate = useNavigate();

  let [items, setItems] = useState([])

  useEffect(()=>{
    const datafetch = async() => {
      const data = await axios.get(`https://fakestoreapi.com/products/${param.id}`) 
      setItems(data.data)
    }
    datafetch();
  },[param.id])

  console.log(items)



  return (
    <div style={{textAlign:'center'}}>
      <button onClick={()=>navigate('/')}>Back</button>
        <h1>{items.title}</h1>
        <img src={items.image} alt="Loading" width="100px" />
        <p>{items.description}</p>
    </div>
  );
};

export default About;
