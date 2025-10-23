import './form.css'
import React from "react";

interface FormProps {
  total: number;
}

const Formulario: React.FC<FormProps> = ({ total }) => {
  return (
    <div className="formulario">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" id="nombre" />

      <label htmlFor="direccion">Dirección</label>
      <input type="text" id="direccion" />

      <label htmlFor="tel">Teléfono</label>
      <input type="text" id="tel" />

      <button>Pagar</button>
    
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Formulario;