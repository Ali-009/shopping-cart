import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage'
import CataloguePage from './pages/CataloguePage'
import ShoppingCart from './pages/ShoppingCart'
import './styles/App.css';

function App() {
  const previousCart = localStorage.getItem('cart')
  let initialCart = []
  if(previousCart){
    initialCart = JSON.parse(previousCart)
  } 
  const [cart, setCart] = useState(initialCart)
  return (
    <div className='App'>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/catalogue'>Catalogue</Link></li>
          <li><Link to='/shopping-cart'>Shopping Cart</Link></li>
        </ul>
      </nav>
      <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/catalogue' element={<CataloguePage cart={cart} setCart={setCart}/>}/>
                <Route path='/shopping-cart' element={<ShoppingCart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </div>
  )
}

export default App;
