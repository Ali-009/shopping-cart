import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from './pages/HomePage'
import CataloguePage from './pages/CataloguePage'
import ShoppingCart from './pages/ShoppingCart'
import cartIcon from './assets/icons/shopping_cart.png'
import './styles/App.css';

function App() {
  const previousCart = localStorage.getItem('cart')
  let initialCart = []
  if(previousCart){
    initialCart = JSON.parse(previousCart)
  } 
  const [cart, setCart] = useState(initialCart)
  function handleNavbarWidth(e){
    if(document.querySelector('.navbar-details-pane')){
      document.querySelector('.navbar').classList.toggle('navbar-details-pane')
    }
  }
  return (
    <div className='App'>
      <nav className='navbar'>
        <ul>
          <li className='navbar-home'><Link to='/'>Home</Link></li>
          <li className='navbar-catalogue'><Link to='/catalogue'>Catalogue</Link></li>
          <li className='navbar-cart'>
            <Link to='/shopping-cart'>
              <img src={cartIcon} alt="Shopping Cart" onClick={handleNavbarWidth}/> 
           </Link>
           {`  ${cart.reduce((sum, currentItem) => sum + (currentItem.price * currentItem.quantity), 0)}$`}
          </li>
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
