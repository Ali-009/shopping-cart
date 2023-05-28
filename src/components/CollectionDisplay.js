import {useState} from 'react'
import '../styles/CollectionDisplay.css'

function CollectionDisplay({header, movieData, setCurrentSelection, cart, setCart}){

    const [startIndex, setStartIndex] = useState(0)
    //endIndex marks the number of movies to display on the screen at one time
    const endIndex = 4;
    const displayedMovies = movieData.slice(startIndex, startIndex + endIndex)

    function handleBack(){
        if(startIndex === 0){
            return
        }
        setStartIndex(startIndex => startIndex - endIndex)
    }

    function handleForward(){
        //If all the last five movies are displayed, don't update the startIndex
        if((startIndex + endIndex) >= movieData.length){
            return
        }
        
        setStartIndex(startIndex => startIndex + endIndex)
    }

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

    function handleSelection(e){
        setCurrentSelection(findMovie(displayedMovies, +e.target.id))
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

    return(
        <div className='collection-container'>
            <h2>{header}</h2>
            <div className="collection-interface">
                <button onClick={handleBack}>←</button>
                <div className='collection-display'>
                    {displayedMovies.map(movie => {
                        return (
                            <figure key={movie.id}>
                                <img id={movie.id} src={movie.poster} alt={movie.title + ' Poster'} onClick={handleSelection}/>
                                <div className="movie-interface">
                                    <figcaption>{movie.title}</figcaption>
                                    <button id={movie.id} data-testid={`increase-${movie.id}`} onClick={handleCartAdd}>+</button>
                                    <span data-testid={`quantity-${movie.id}`}>
                                        {cart.length > 0 && findMovie(cart, movie.id) 
                                        ? findMovie(cart, movie.id).quantity : 0}
                                    </span>
                                    <button id={movie.id} data-testid={`decrease-${movie.id}`} onClick={handleCartRemove}>-</button>
                                </div>
                            </figure>
                        )
                    })}
                </div>
                <button onClick={handleForward}>→</button>
            </div>
        </div>
    )   
}
export default CollectionDisplay;