import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeFromCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalGeneral = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrito de Compras</h1>

      {items.length === 0 && <p>El carrito está vacío.</p>}

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
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Total producto: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increment(item.id))}>
            +
          </button>

          <button
            onClick={() => dispatch(decrement(item.id))}
            style={{ marginLeft: "10px" }}
          >
            -
          </button>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{ marginLeft: "10px", backgroundColor: "#d32f2f", color: "white" }}
          >
            Eliminar
          </button>
        </div>
      ))}

      <h2>Total General: ${totalGeneral}</h2>

      <button
        onClick={() => alert("Función de pago próximamente")}
        style={{ marginRight: "10px" }}
      >
        Pagar
      </button>

      <Link to="/plants">
        <button>Continuar Comprando</button>
      </Link>
    </div>
  );
}

export default CartItem;