import '../styles/DetailsPane.css'

function DetailsPane({currentSelection: movie}){
    return(
        <div className='details-pane'>
            <img src={movie.backdrop} alt={movie.title + ' Backdrop'} />
            <h3 className='title'>{movie.title}</h3>
            <div className='tagline'>{movie.tagline}</div>
            <div className='overview'>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
            </div>
            <div className='release-date'>
                <h4>Release Date: </h4>
                <time dateTime={movie.releaseDate}>
                    {new Date(movie.releaseDate).toLocaleDateString('en-GB')}
                </time>
            </div>
            <div className='genres'>
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