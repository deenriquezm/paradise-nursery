import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Monstera", price: 25, category: "Tropical" },
  { id: 2, name: "Fiddle Leaf Fig", price: 30, category: "Tropical" },
  { id: 3, name: "Snake Plant", price: 20, category: "Succulent" },
  { id: 4, name: "Aloe Vera", price: 15, category: "Succulent" },
  { id: 5, name: "Peace Lily", price: 18, category: "Flowering" },
  { id: 6, name: "Orchid", price: 22, category: "Flowering" }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Inicio</Link>
        <Link to="/cart">Carrito ({totalItems})</Link>
      </nav>

      <h1>Listado de Plantas</h1>

      {plants.map(plant => {
        const isInCart = cartItems.some(item => item.id === plant.id);

        return (
          <div 
            key={plant.id} 
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px"
            }}
          >
            <h3>{plant.name}</h3>
            <p>Categoría: {plant.category}</p>
            <p>Precio: ${plant.price}</p>

            <button
              onClick={() => dispatch(addToCart(plant))}
              disabled={isInCart}
            >
              {isInCart ? "Agregado" : "Agregar al Carrito"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;