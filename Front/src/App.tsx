import './App.css';
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import BannerRotativo from './components/Banner';
import Selector from './components/Selector'; // ✅ Importa el componente que ya gestiona Cart y PizzaList

function App() {
  return (
    <div className='App'>
      <Encabezado />
      <BannerRotativo />
      <Selector /> {/* ✅ Aquí se renderiza todo el flujo de pizzas y carrito */}
      <Pie />
    </div>
  );
}

export default App;
