import React, { useState, useEffect } from 'react';
import PizzaList from './PizzaList';
import Cart from './Cart';
import type { PizzaData } from './PizzaData';
import Formulario from './form';

const Selector: React.FC = () => {
  const [carrito, setCarrito] = useState<PizzaData[]>([
    { image: '/src/assets/images/pproni.svg', description: 'Pepperoni', precio: 120, cantidad: 0 },
    { image: '/src/assets/images/hawa.svg', description: 'Hawaiana', precio: 110, cantidad: 0 },
    { image: '/src/assets/images/mx.svg', description: 'Mexicana', precio: 130, cantidad: 0 },
    { image: '/src/assets/images/combinada.svg', description: 'Combinada', precio: 140, cantidad: 0 },
  ]);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hayPizzas = carrito.some((pizza) => pizza.cantidad > 0);
    setVisible(hayPizzas);
  }, [carrito]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const agregarPizza = (tipo: string) => {
    setCarrito((prev) =>
      prev.map((pizza) =>
        pizza.description === tipo
          ? { ...pizza, cantidad: pizza.cantidad + 1 }
          : pizza
      )
    );
  };

  const quitarPizza = (tipo: string) => {
    setCarrito((prev) =>
      prev.map((pizza) =>
        pizza.description === tipo
          ? { ...pizza, cantidad: pizza.cantidad - 1 }
          : pizza
      )
    );
  };

  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="selector">
      {visible && (
        <Cart items={carrito.filter((p) => p.cantidad > 0)} onDeleteToCart={quitarPizza} 
         onContinuar={() => setMostrarFormulario(true)}/>
      )}
      {mostrarFormulario && <Formulario total={total} />}
      <h1>🍕 Selector de Pizzas</h1>
      <PizzaList pizzas={carrito} onAddToCart={agregarPizza} />
    </div>
  );
};

export default Selector;
