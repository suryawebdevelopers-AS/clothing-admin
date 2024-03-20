import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inventory from "./components/Inventory/inventory";
import Navbar from "./components/Navbar/navbar";
import Products from "./components/products/products";
import ProductUpdate from "./components/products/productupdate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productupdate" element={<ProductUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
