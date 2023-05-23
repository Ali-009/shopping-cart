import {useState} from 'react'
import '../styles/CollectionDisplay.css'

function CollectionDisplay({header, movieData, setCurrentSelection}){

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

    function handleSelection(e){
        setCurrentSelection(displayedMovies.find(movie => movie.id === +e.currentTarget.id))
    }

    return(
        <div className='collection-container'>
            <h2>{header}</h2>
            <div className='collection-display'>
                <button onClick={handleBack}>←</button>
                {displayedMovies.map(movie => {
                    return (
                        <figure key={movie.id} id={movie.id} onClick={handleSelection}>
                            <img src={movie.poster} alt={movie.title + ' ' + 'Poster'} />
                            <figcaption>{movie.title}</figcaption>
                        </figure>
                    )
                })}
                <button onClick={handleForward}>→</button>
            </div>
        </div>
    )   
}
export default CollectionDisplay;