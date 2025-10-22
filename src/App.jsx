import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Navbar from "./pages/Navbar";
import Quienes_somos from "./pages/Quienes_somos";
import Productos from "./pages/productos";
import ProductoDetalle from "./pages/ProductoDetalle";

function App() {
  return(
    <div>
       <Navbar />
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/Servicios" element={<Servicios/>}/>
          <Route path="/Productos" element={<Productos/>}/>
          <Route path="/Quienes_somos" element={<Quienes_somos/>}/>
          <Route path="/productos/:id" element={<ProductoDetalle/>}/>
        </Routes>
    </div>
  )
}

export default App