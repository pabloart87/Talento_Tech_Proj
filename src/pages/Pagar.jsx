import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import { useCartContext } from '../context/CartContext';

export default function Pagar() {
  const { usuario, cerrarSesion } = useAuthContext();
  const { carrito, total, vaciarCarrito, agregarCantidad, quitarCantidad } = useCartContext();
  const navigate = useNavigate();

  const tokenActual = localStorage.getItem('authToken');

  // Función para finalizar compra
  const comprar = () => {
    alert("¡Compra realizada con éxito!");
    vaciarCarrito(); // Limpiar carrito después de comprar
    navigate("/productos");
  };

  return (
    <div>
      {/* Info del usuario */}
      <div>
        <h2>Hola {usuario.nombre}</h2>
        <p>Email: {usuario.email}</p>
       
        {/* Estilo para el Token */}
        <div style={{
          background: '#f0f0f0',
          padding: '8px',
          borderRadius: '4px',
          margin: '10px 0',
          fontSize: '12px',
          wordBreak: 'break-all'
        }}>
          <strong>Token:</strong> {tokenActual}
        </div>
        <button onClick={cerrarSesion}>Cerrar sesión</button>
        <hr />
      </div>

      {/* Carrito */}
      <div className="p-5">
        <h2 className="mb-4">Vas a comprar:</h2>

        {carrito.length > 0 ? (
          <div>
            {carrito.map((producto) => {
              const cantidad = Number(producto.cantidad || 1);
              const precioUnitario = Number(producto.precio || 0);
              const subtotal = cantidad * precioUnitario;
              return (
                <div key={producto.id} className="row">
                  <img src={producto.avatar} alt={producto.nombre} width="60" className="col-6" />
                  <div className="col-6">
                    <div className="fs-5 fw-bold text-primary">{producto.nombre}</div>
                    <div>Precio unidad: ${Number(precioUnitario).toFixed(3)}</div>
                    <div className="border-bottom">Cantidad: {cantidad}
                    <button onClick={() => quitarCantidad(producto.id)}>-</button>
                    <button onClick={() => agregarCantidad(producto.id)}>+</button>
                    </div>
                    <div><strong>Subtotal: ${Number(subtotal).toFixed(3)}</strong></div>
                  </div>
                </div>
              );
            })}
            <h3 className="fs-4 fw-bold text-dark bg-light rounded-4 shadow-sm p-2">Total a pagar: ${Number(total).toFixed(3)}</h3>
          </div>

        ) : (
          <p>No hay productos en el carrito</p>
        )}
      </div>
      <div>
        <button onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
      <div>
        {carrito.length > 0 && (
          <button onClick={comprar}>Confirmar y Pagar</button>
        )}
        <button onClick={() => navigate("/productos")}>
          {carrito.length > 0 ? "Seguir Comprando" : "Volver a Productos"}
        </button>
      </div>
    </div>
  );
}