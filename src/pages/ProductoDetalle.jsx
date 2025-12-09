import { Link, useParams, useLocation } from "react-router-dom";
import styled from 'styled-components';

const ProductoDetalle = () => {
 
    const { id } = useParams();
    const location = useLocation();
    const producto = location.state?.producto;
 
if (!producto) {
    return (
      <div>
        <p>No se pudo cargar el producto</p>
        <Link to="/carrito">
          <button>Volver a Productos</button>
        </Link>
      </div>
    );
  }
 
  return (
        <div className="container-md py-3">
            <h2 className="mb-3">Detalles del Producto</h2>
           
            {/* Fila Superior: para separar en 2 columnas */}
            <div className="row align-items-start g-0 mb-4">
               
                {/* Columna para la imagen - IZQUIERDA (md-6) */}
                <div className="col-md-6">
                    <div className="card border-0">
                        <div className="card-body text-center p-2">
                            <img
                                src={producto.avatar}
                                alt={producto.nombre}
                                className="img-fluid rounded w-50"
                            />
                        </div>
                    </div>
                </div>


                {/* Columna para la información - DERECHA (md-6) */}
                <div className="col-md-6">
                    <div className="card border-0">
                        <div className="card-body p-1">


                            <h4 className="text-primary mb-2">{producto.nombre}</h4>
                           
                            <div className="mb-2">
                                <strong>Descripción:</strong>
                                <p className="card-text mb-1">{producto.descripcion}</p>
                            </div>
                           
                            <div className="mb-2">
                                <strong>Categoría:</strong>
                                <span className="badge bg-secondary ms-1">{producto.categoria}</span>
                            </div>
                   
                            <div className="mb-3">
                                <strong>Precio:</strong>
                                <h5 className="text-success d-inline ms-1">${producto.precio}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Fila Inferior: Botón de Volver (col-12) */}
            <div className="row">
                <div className="col-12 text-center mt-3">
                    <Link to={`/productos`}>
                         <BotonEstilizado>Volver</BotonEstilizado>
                    </Link>
                </div>
            </div>
        </div>
    );
}; export default ProductoDetalle;

const BotonEstilizado = styled.button`
  background: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.5s;


  &:hover {
    background: #31312eff;
    color: white;


  }
`;