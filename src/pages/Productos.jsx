import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarritoCompras from "./carrito";

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("https://68cc925a716562cf5077d010.mockapi.io/API_V1/producto  ")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        {console.error("Error!,", error)}
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
    alert(`Producto ${producto.nombre} agregado al carrito`);
  }

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;


  return (
    <>
    <ul id="lista-productos">
      {productos.map((producto) => (
        <li key={producto.id}>
          <h2>{producto.nombre}</h2>
          <br />
          Descripción: {producto.descripcion}
          <br />
          Precio: ${producto.precio}
          <br />
          Categoria: ${producto.categoria}
          <br />
          <img src={producto.avatar} alt={producto.nombre} width="80%" height="50%" />
          <Link to={`/productos/${producto.categoria || "sin-categoria"}/${producto.id}`} state={{producto}}> <button>Ver mas</button> </Link>
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
    <CarritoCompras carrito={carrito} setCarrito={setCarrito}/>
    </>
  );
}