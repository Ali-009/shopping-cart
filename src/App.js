import {useState} from 'react'
import CataloguePage from './pages/CataloguePage';
import './styles/App.css';


function App() {
  const [cart, setCart] = useState([])
  return (
    <div className='App'>
      <CataloguePage cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App;
