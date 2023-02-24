import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom: "3px solid rgb(155, 216, 235)",
        background: "#dcecf7",
      }}
    >
      <div onClick={() => navigate('/')}>Comp Logo</div>
      <button onClick={() => navigate('/create')}>Add Product</button>
    </div>
  );
};

export default Navbar;
