import {useState, useEffect} from 'react'

function CatalogueDisplay({movieData, header}){

    const [startIndex, setStartIndex] = useState(0)
    //endIndex marks the number of movies to display on the screen at one time
    const endIndex = 5;
    const displayedMovies = movieData.slice(startIndex, startIndex + endIndex)

    function handleBack(e){
        if(startIndex === 0){
            return
        }
        setStartIndex(startIndex => startIndex - endIndex)
    }

    function handleForward(e){
        //If all the last five movies are displayed, don't update the startIndex
        if((startIndex + endIndex) === movieData.length){
            return
        }
        
        setStartIndex(startIndex => startIndex + endIndex)
    }

    return(
        <div className="catalogue-container">
            <h2>{header}</h2>
            <div className='catalogue-display'>
                <button onClick={handleBack}>←</button>
                {displayedMovies.map(movie => {
                    return (
                        <figure key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w300/${movie.posterPath}`} alt={movie.title} />
                            <figcaption>{movie.title}</figcaption>
                        </figure>
                    )
                })}
                <button onClick={handleForward}>→</button>
            </div>
        </div>
    )   
}

export default CatalogueDisplay;