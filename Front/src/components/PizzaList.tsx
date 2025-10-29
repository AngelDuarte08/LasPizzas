import React from 'react';
import Pizza from './Pizzas';
import type { PizzaData } from '../components/PizzaData'; // ajusta la ruta si es necesario
import './pizzas.css';

interface PizzaListProps {
  pizzas: PizzaData[];
  onAddToCart: (tipo: string) => void;
}

const PizzaList: React.FC<PizzaListProps> = ({ pizzas, onAddToCart }) => {
  return (
    <div className="pizza-list">
      {pizzas.map((pizza, index) => (
        <Pizza
          key={index}
          image={pizza.image}
          description={pizza.description}
          precio={pizza.precio}
          cantidad={pizza.cantidad}
          onAdd={onAddToCart}
        />
      ))}
    </div>
  );
};

export default PizzaList;
