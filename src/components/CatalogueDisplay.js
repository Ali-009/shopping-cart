import {useState} from 'react'

function CatalogueDisplay({movieData}){
    return(
        <div className='catalogue-display'>
            {movieData.map(movie => {
                return (
                    <figure key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.posterPath}`} alt={movie.title} />
                        <figcaption>{movie.title}</figcaption>
                    </figure>
                )
            })}
        </div>
    )   
}

export default CatalogueDisplay;