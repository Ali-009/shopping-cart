
function CartInterface({displayedMovies, movie, cart, setCart}){

    //Helps find a movie by ID in a given array of movie objects
    function findMovie(movieArray, movieId){
        return movieArray.find(movie => {
            //In case movie is undefined
            if(movie){
                return movie.id === movieId
            } else {
                return false
            }
        })
    }
    
    function handleCartAdd(e){
        const movieToAdd = findMovie(displayedMovies, +e.target.id)
        setCart(cart => {
            if(findMovie(cart, movieToAdd.id)){
                let updatedCart = cart.map((movie) => {
                    if(movie.id === movieToAdd.id){
                        return {
                                id: movie.id,
                                title: movie.title,
                                poster: movie.poster,
                                price: movie.price,
                                quantity: findMovie(cart, movie.id).quantity + 1,
                            }
                    } else {
                        return movie
                    }
                })
                return updatedCart
            } else {
               return [...cart, {
                id: movieToAdd.id,
                title: movieToAdd.title,
                poster: movieToAdd.poster,
                price: movieToAdd.price, 
                quantity: 1,
                }]
            }
        })
    }

    function handleCartRemove(e){
        const movieToRemove = findMovie(displayedMovies, +e.target.id)
        setCart(cart => {
            if(findMovie(cart, movieToRemove.id)){
                const movieQuantity = findMovie(cart, movieToRemove.id).quantity
                if(movieQuantity > 1){
                    let updatedCart = cart.map((movie) => {
                        if(movie.id === movieToRemove.id){
                            return {
                                id: movie.id,
                                title: movie.title,
                                poster: movie.poster,
                                price: movie.price,
                                quantity: findMovie(cart, movie.id).quantity - 1
                            } 
                        } else {
                            return movie
                        }
                    })
                    return updatedCart
                } else  if (movieQuantity === 1){
                    //If only a single copy of the movie is left in the cart, reducing quantity
                    //should remove the movie from the cart
                    let updatedCart = cart.filter(movie => movie.id !== movieToRemove.id)
                    return updatedCart
                }
            } else {
                //If no copy of the movie is in the cart, reducing the quantity should preform nothing
                //And return an unaltered cart
                return cart
            }
        })
    }

    return (
    <div className="cart-interface">
        <button id={movie.id} data-testid={`increase-${movie.id}`} onClick={handleCartAdd}>+</button>
        <span data-testid={`quantity-${movie.id}`}>
            {cart.length > 0 && findMovie(cart, movie.id) 
            ? findMovie(cart, movie.id).quantity : 0}
        </span>
        <button id={movie.id} data-testid={`decrease-${movie.id}`} onClick={handleCartRemove}>-</button>
    </div>
    )
}

export default CartInterface;