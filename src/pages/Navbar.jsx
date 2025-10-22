import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Servicios">Servicios</Link></li>
                <li><Link to="/Quienes_somos">Quienes Somos</Link></li>
                <li><Link to="/Productos">Productos</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar