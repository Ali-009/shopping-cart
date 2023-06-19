import CartInterface from "../components/CartInterface";
import '../styles/ShoppingCart.css'
import '../styles/CartIsEmpty.css'

function ShoppingCart({cart, setCart}){

    if(cart.length > 0){
        return(
            <div className="table-container">
                <table className="shopping-cart-container">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.length > 0 && cart.map(((movie, index) => {
                            return (
                                <tr key={movie.id} id={movie.id}>
                                    <td className="movie-poster"><img src={movie.poster} alt={`${movie.title} Poster`} /></td>
                                    <td className="movie-title">{movie.title}</td>
                                    <td className="movie-quantity">
                                        <CartInterface displayedMovies={cart} movie={movie} cart={cart} setCart={setCart}/>
                                    </td>
                                    <td className="movie-total-price" data-testid={`price-${movie.id}`}>{movie.quantity * movie.price}$</td>
                                </tr>
                            )
                        }))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th id='total' colSpan={3}>Total</th>
                            <td>{cart.length > 0 && cart.reduce((accumulator, currentValue) => {
                                return accumulator + (currentValue.price * currentValue.quantity)
                            }, 0)}$</td>
                        </tr>
                    </tfoot>
                </table>
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