import React from "react";
import { Link } from "react-router-dom";
import { assignColor, data } from "../api/data";

const Navbar = ({setItems}) => {
  const categories = data.map((e) => e.category);
  const reqCat = [...new Set(categories)];

  const handeFilter = (cat) => {
    const filterData = data.filter(e => e.category === cat);
    setItems(filterData);
  }
  return (
    <div
      style={{
        display: "flex",
        height: "30px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderBottom:'3px solid rgb(155, 216, 235)',
        background:'#dcecf7',
      }}
    >
      <div>Comp Logo</div>

      <div style={{ display: "flex", gap: "20px" }}>
        {reqCat.map((i, index) => {
          return (
            <button className="home-button" style={assignColor(i)} onClick={()=>handeFilter(i)} key={index} >
              {i}
            </button>
          );
        })}
        <Link to="/">
          <button className="home-button" onClick={() =>setItems(data)}>All</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
