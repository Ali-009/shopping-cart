import '../styles/DetailsPane.css'

function DetailsPane({currentSelection: movie}){
    //Reset the scrollbar whenever a new .detaisl-pane needs to be rendered
    const detailsPane = document.querySelector('.details-text-container')
    if(detailsPane){
        detailsPane.scrollTop = 0;
    }
    return(
        <div className='details-pane'>
            <img src={movie.backdrop} alt={movie.title + ' Backdrop'} />
            <div className="details-text-container">
                <h3 className='title'>{movie.title}</h3>
                <div className='tagline'>{movie.tagline}</div>
                <div className='overview'>
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
        </div>
    )
}

export default DetailsPane