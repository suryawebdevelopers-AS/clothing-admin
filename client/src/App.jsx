import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inventory from "./components/Inventory/inventory";
import Navbar from "./components/Navbar/navbar";
import Products from "./components/products/products";


function App() {
  return (
    <BrowserRouter>
      < Navbar/>
    <Routes>
        
          <Route path="/inventory" element={< Inventory/>} />
          <Route path="/products" element={<Products />} />
        
    </Routes>
    </BrowserRouter>
  );
}

export default App;