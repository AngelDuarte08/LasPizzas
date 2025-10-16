import React from 'react';
import './pizas.css';

interface Props {
    image: string;
    description: string;
}


const Pizza: React.FC<Props> = ({ image, description }) => {
    return (
    <div className="pizza-card">
        <img src={image} alt={description} />
        <h3>{description}</h3>
        <button>Agregar</button>
    </div>
    );
};


const PizzaList: React.FC = () => {
    const pizzasData = [
    { image: '/src/assets/images/pproni.svg', description: 'Pepperoni' },
    { image: '/src/assets/images/hawa.svg', description: 'Hawaiana' },
    { image: '/src/assets/images/mx.svg', description: 'Mexicana' },
    { image: '/src/assets/images/combinada.svg', description: 'Combinada' },
    ];

    return (
    <div className="pizza-list">
        {pizzasData.map((pizza, index) => (
        <Pizza 
            key={index} 
            image={pizza.image} 
            description={pizza.description} 
        />
        ))}
    </div>
    );
};

export default PizzaList;
