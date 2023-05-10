
import {useState} from 'react'

function MovieSearch(){

    const [searchTerm, setSearchTerm] = useState('')
    const [imagePathArray, setImagePathArray] = useState([])

    async function submitHandler(e){
        e.preventDefault();
        
        let fetchedData = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6a78c5940e0cb6d88f0018ba51b36d2&query=${searchTerm}`)
        
        let response = await fetchedData.json()
        let resultsArray = response.results

        setImagePathArray(resultsArray.map((result) => {
            return `http://image.tmdb.org/t/p/w154/${result.poster_path}`
        }))
    }

    return(
        <div className='movie-search'>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={(e) => setSearchTerm(e.target.value)}/>
            <button type="submit" onClick={submitHandler}>
                OK!
            </button>
            <div className='search-results'>
                {imagePathArray.map((imagePath) => {
                        return <img src={imagePath} alt="Movie Poster" />
                })}
            </div>
        </div>
    )
}

export default MovieSearch;