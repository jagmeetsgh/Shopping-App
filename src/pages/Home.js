import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const items = await axios.get(
        "http://localhost:1337/api/products?populate=*"
      );
      setProducts(items.data.data);
    };
    fetchData();
  }, []);

  const handleDelete = async(del_id) => {
    const data = await axios.delete(`http://localhost:1337/api/products/${del_id}`)
    if(data.data !== undefined){
      const getItems = await axios.get('http://localhost:1337/api/products?populate=*');
      setProducts(getItems.data.data)
    }
  }
  return (
    <Box
      sx={{
        textAlign: "center",
        w: 100,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((e) => {
        return (
          <Box
            sx={{
              border: "2px solid",
              borderRadius: "10px",
              width: "200px",
              m: 2,
              p: 2,
            }}
            key={e.id}
          >
            <h1>{e.attributes.name}</h1>
            <h3>$ {e.attributes.price}</h3>
            <h5>{e.attributes.category.data.attributes.name}</h5>
            <button style={{ marginRight: "10px" }} onClick={() => navigate(`/${e.id}`) } >Open</button>
            <button style={{ marginRight: "10px" }} onClick={()=>handleDelete(e.id)} >Delete</button>
            <button  onClick={() => navigate(`/edit/${e.id}`) } >Edit</button>
          </Box>
        );
      })}
    </Box>
  );
};

export default Home;
