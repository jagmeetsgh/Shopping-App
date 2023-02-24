import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [values, setValues] = useState({
    data: {
      name: "",
      price: "",
      category: "",
    },
  });
  const [cat, setCat] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const getProduct = await axios.get(`http://localhost:1337/api/products/${id}?populate=*`);
      const categories = await axios.get(
        "http://localhost:1337/api/categories"
      );
      setCat(categories.data.data);
      setValues({
        ...values,
        data:{
            ...values.data,
            name: getProduct.data.data.attributes.name,
            price: getProduct.data.data.attributes.price,
            category: getProduct.data.data.attributes.category.data.id
        }
      })
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      data: {
        ...values.data,
        [name]: value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = await axios.put(`http://localhost:1337/api/products/${id}`, values)
    if (submitData.data.data !== undefined) {
      navigate("/");
    }
  };

  return (
    <div>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <input
          type="text"
          placeholder="Product Name"
          onChange={handleChange}
          name="name"
          value={values.data.name}
        />{" "}
        <br />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={values.data.price}
        />{" "}
        <br />
        <select onChange={handleChange} name="category" value={values.data.category}>
          <option selected disabled>
            select category
          </option>
          {cat.map((e) => {
            return <option value={e.id}>{e.attributes.name}</option>;
          })}
        </select>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Edit;
