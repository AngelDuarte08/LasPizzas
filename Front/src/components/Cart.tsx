import React from 'react';
import type { PizzaData } from './PizzaData';
import './Cart.css';

interface CartProps {
  items: PizzaData[];
  onDeleteToCart: (tipo: string) => void;
  onContinuar: () => void; // ✅ nuevo prop
}

const Cart: React.FC<CartProps> = ({ items, onDeleteToCart, onContinuar }) => {
  const total = items.reduce((acc, pizza) => acc + pizza.precio * pizza.cantidad, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul>
            {items.map((pizza, index) => (
              <li key={index}>
                <img src={pizza.image} alt={pizza.description} width={30} />
                <span>{pizza.description}</span> — 
                <span>{pizza.cantidad} 🍕</span> — 
                <span>${pizza.precio.toFixed(2)} c/u</span> — 
                <strong>Total: ${(pizza.precio * pizza.cantidad).toFixed(2)}</strong>
                <button className='delete' onClick={() => onDeleteToCart(pizza.description)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">
            Total general: ${total.toFixed(2)}
          </p>
          <button onClick={onContinuar}>Continuar</button> 
        </>
      )}
    </div>
  );
};

export default Cart;
