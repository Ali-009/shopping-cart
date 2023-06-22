import CartInterface from "../components/CartInterface";
import '../styles/ShoppingCart.css'
import '../styles/CartIsEmpty.css'

function ShoppingCart({cart, setCart}){
    if(cart.length > 0){
        return(
            <div className="shopping-cart-container">
                <div className="cart-header">
                        <div className='quantity-header'>Quantity</div>
                        <div className='total-price-header'>Price</div>
                </div>
                <div className="cart-items">
                    {cart.length > 0 && cart.map((movie => {
                        return (
                            <div className='cart-movie' key={movie.id} id={movie.id}>
                                <div className="movie-poster"><img src={movie.poster} alt={`${movie.title} Poster`} /></div>
                                <div className="movie-title">{movie.title}</div>
                                <div className="movie-quantity">
                                    <CartInterface displayedMovies={cart} movie={movie} cart={cart} setCart={setCart}/>
                                </div>
                                <div className="movie-total-price" data-testid={`price-${movie.id}`}>{movie.quantity * movie.price}$</div>
                            </div>
                        )
                    }))}
                </div>
                <div className="cart-footer">
                        <div className='cart-total-footer'>Total</div>
                        <div className='shopping-cart-total' data-testid='shopping-cart-total'>
                            {cart.length > 0 && cart.reduce((accumulator, currentValue) => {
                                return accumulator + (currentValue.price * currentValue.quantity)
                            }, 0)}$
                        </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="cart-is-empty">
                <div className="cart-is-empty-emote">{"(^_^)b"}</div>
                <div className="cart-is-empty-text">Your cart is empty! Checkout our catalogue to find your next favorite movie!</div>
            </div>
            
        )
    }    
}

export default ShoppingCart;