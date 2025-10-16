import './App.css'
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import PizzaList from './pizzas'

function App() {
  return (
    <body>
      <div className='App'>
      <Encabezado/>
      <PizzaList/>
      <Pie/>
    </div>
    </body>
  )
}

export default App;
