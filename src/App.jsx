import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Servicios from "./pages/Servicios";
import Navbar from "./pages/Navbar";
import Quienes_somos from "./pages/Quienes_somos";
import Productos from "./pages/productos";
import ProductoDetalle from "./pages/ProductoDetalle";
import Pagar from "./pages/Pagar";
import RutaProtegida from "./pages/RutaProtegida";
import IniciarSesion from "./pages/IniciarSesion";
import Footer from "./pages/Footer";
import { AppProvider } from "./context/AppContext"

function App() {

  return(
    <AppProvider>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        <Route path="/Productos" element={<Productos/>}/>
        <Route path="/Quienes_somos" element={<Quienes_somos/>}/>          
        <Route path="/productos/:categoria/:id" element={<ProductoDetalle/>}/>
        <Route path="/iniciar-sesion" element={<IniciarSesion/>
          }
        />
        <Route path="/pagar" element={<RutaProtegida>
            <Pagar/>   
            </RutaProtegida>
          }
         />
      </Routes>
      <Footer />
    </div>
    </AppProvider>
  )
}

export default App