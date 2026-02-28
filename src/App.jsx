import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    // ruta donde está tu lista de plantas
    navigate("/plants");
  };

  return (
    <div className="app-container">
      <h1>Welcome to Paradise Nursery</h1>

      <p>
        Discover our beautiful collection of plants and bring nature into your
        home. Explore different categories and enjoy a simple shopping
        experience.
      </p>

      <button onClick={handleStart}>
        Comenzar
      </button>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Página principal */}
      <Route path="/" element={<Home />} />

      {/* Lista de productos */}
      <Route path="/plants" element={<ProductList />} />

      {/* Carrito */}
      <Route path="/cart" element={<CartItem />} />

      {/* About Us */}
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;