import {useState} from 'react'
import CartInterface from './CartInterface'
import '../styles/CollectionDisplay.css'

function CollectionDisplay({header, movieData, setCurrentSelection, cart, setCart, currentSelection}){

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
        if(findMovie(displayedMovies, +e.target.id) === currentSelection){
            setCurrentSelection(null)
        } else {
            setCurrentSelection(findMovie(displayedMovies, +e.target.id))
        }
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
                                <figcaption>{movie.title}</figcaption>
                                <CartInterface displayedMovies={displayedMovies} movie={movie} 
                                cart={cart} setCart={setCart}/>
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