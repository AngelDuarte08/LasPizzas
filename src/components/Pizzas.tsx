import React from 'react';
import './Pizzas.css';

interface PizzaProps {
  image: string;
  description: string;
  precio: number;
  cantidad:number;
  onAdd: (tipo: string) => void;
}

const Pizza: React.FC<PizzaProps> = ({ image, description, precio, onAdd }) => {
  return (
    <div className="pizza-card">
      <img src={image} alt={description} />
      <h3>{description}</h3>
      <p>Precio: ${precio.toFixed(2)}</p>
      <button onClick={() => onAdd(description)}>
        Agregar
      </button>
    </div>
  );
};

export default Pizza;
export type { PizzaProps };
