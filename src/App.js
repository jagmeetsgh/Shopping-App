import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { data } from "./api/data";
import About from "./pages/About";

const App = () => {
  const [items, setItems] = useState(data);
  return (
    <BrowserRouter>
      <Navbar setItems={setItems} />
      <Routes>
        <Route path="/" element={<Home data={items} />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
