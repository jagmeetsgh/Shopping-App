import React from "react";
import { useNavigate } from "react-router-dom";
import { assignColor } from "../api/data";

const Home = ({data}) => {

  const navigate  = useNavigate();

  return (
    <div className="home-main">
      {data.map((e) => {
        return (
          <div className="home-card" key={e.id} onClick={() => navigate(`/${e.id}`)}>
            <img src={e.image} alt="Loading.." className="home-image" />
            <h3>$ {e.price}</h3>
            <button className="home-button" style={assignColor(e.category)}>
              {e.category}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
