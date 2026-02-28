import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/products");
  };

  return (
    <div className="app-container">
      <h1>Welcome to Paradise Nursery</h1>

      <p>
        Descubre nuestra colección exclusiva de plantas y transforma tu hogar
        en un espacio lleno de vida y naturaleza.
      </p>

      <button onClick={handleStart}>
        Comenzar
      </button>
    </div>
  );
}

export default App;