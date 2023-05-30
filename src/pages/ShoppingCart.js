import CartInterface from "../components/CartInterface";
import '../styles/ShoppingCart.css'

function ShoppingCart({cart, setCart}){
    return(
        <table>
            <thead>
                <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Poster</th>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {cart.length > 0 && cart.map(((movie, index) => {
                    return (
                        <tr key={movie.id} id={movie.id}>
                            <td className="movie-number">{index + 1}</td>
                            <td className="movie-poster"><img src={movie.poster} alt={`${movie.title} Poster`} /></td>
                            <td className="movie-title">{movie.title}</td>
                            <td className="movie-quantity">
                                <CartInterface displayedMovies={cart} movie={movie} cart={cart} setCart={setCart}/>
                            </td>
                            <td className="movie-total-price" data-testid={`price-${movie.id}`}>{movie.quantity * movie.price}</td>
                        </tr>
                    )
                }))}
            </tbody>
            <tfoot>
                <tr>
                    <th id='total' colSpan={3}>Total</th>
                    <td>{cart.length > 0 && cart.reduce((accumulator, currentValue) => {
                        return accumulator + (currentValue.price * currentValue.quantity)
                    }, 0)}</td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ShoppingCart;