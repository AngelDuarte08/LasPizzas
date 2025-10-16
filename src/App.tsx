import './App.css'
import Encabezado from './components/Encabezado';
import Pie from './components/Pie';
import PizzaList from './pizzas'
import BannerRotativo from './components/banner';

function App() {
  return (
    <body>
      <div className='App'>
      <Encabezado/>
      <BannerRotativo></BannerRotativo>
      <PizzaList/>
      <Pie/>
    </div>
    </body>
  )
}

export default App;
