import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  {
    id: 1,
    name: "Monstera",
    price: 25,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Tropical Plants",
    image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85"
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 20,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32c8b45"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 15,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1587502537745-84f38d3e2b5b"
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 18,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a"
  },
  {
    id: 6,
    name: "Orchid",
    price: 22,
    category: "Flowering Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // contador carrito
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // agrupar por categorías
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Inicio</Link>{" | "}
        <Link to="/cart">Carrito ({totalItems})</Link>
      </nav>

      <h1>Our Plants</h1>

      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const isAdded = cartItems.some(
                  item => item.id === plant.id
                );

                return (
                  <div
                    key={plant.id}
                    style={{
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      padding: "15px",
                      width: "200px",
                      textAlign: "center"
                    }}
                  >
                    {/* Imagen */}
                    <img
                      src={plant.image}
                      alt={plant.name}
                      style={{
                        width: "100%",
                        height: "140px",
                        objectFit: "cover",
                        borderRadius: "8px"
                      }}
                    />

                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>

                    <button
                      onClick={() => dispatch(addItem(plant))}
                      disabled={isAdded}
                    >
                      {isAdded ? "Agregado" : "Agregar al Carrito"}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;