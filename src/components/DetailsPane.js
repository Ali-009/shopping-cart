import {useState} from 'react'

function DetailsPane({currentSelection: movie}){
    return(
        <div className='details-pane'>
            <img src={movie.backdrop} alt={movie.title + '' + 'Backdrop'} />
            <h3>{movie.title}</h3>
            <div>{movie.tagline}</div>
            <p>
                <h4>Overview</h4>
                {movie.overview}
            </p>
            <time dateTime={movie.releaseDate}>
                <h4>Release Date: </h4>
                {new Date(movie.releaseDate).toLocaleDateString('en-GB')}
            </time>
            <div>
                <h4>Genres: </h4> 
                {movie.genres.map((genre, index) => {
                    if(index === movie.genres.length - 1){
                        return ` ${genre}`
                    } else {
                        return `${genre}, `
                    }
                })}
            </div>
        </div>
    )
}

export default DetailsPane