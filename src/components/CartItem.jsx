import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  /* ===============================
     FUNCIONES DE CÁLCULO
  =============================== */

  // Total por producto
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Total general del carrito
  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) => total + calculateTotalCost(item),
      0
    );
  };

  /* ===============================
     FUNCIONES DE ACCIONES
  =============================== */

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, amount: 1 }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, amount: -1 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckoutShopping = () => {
    alert("Checkout functionality coming soon!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* Total por producto usando función */}
          <p>Total Cost: ${calculateTotalCost(item)}</p>

          <button onClick={() => handleIncrement(item.id)}>+</button>

          <button
            onClick={() => handleDecrement(item.id)}
            style={{ marginLeft: "10px" }}
          >
            -
          </button>

          {/* Botón eliminar con clase */}
          <button
            className="remove-button"
            onClick={() => handleRemoveItem(item.id)}
            style={{
              marginLeft: "10px",
              backgroundColor: "#d32f2f",
              color: "white"
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Total general usando función */}
      <h2>Total Amount: ${calculateTotalAmount()}</h2>

      <button onClick={handleCheckoutShopping}>
        Checkout
      </button>

      <Link to="/plants">
        <button style={{ marginLeft: "10px" }}>
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;