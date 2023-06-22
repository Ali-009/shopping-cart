import '../styles/HomePage.css'
import homePageBG from '../assets/homepage-bg.webp'
import {Link} from 'react-router-dom'

function HomePage(){
    return (
        <div className='homepage-container'>
            <img src={homePageBG} alt="Background From Extra Terrestrial" />
            <h2>Check out our <Link to='/catalogue'>catalogue</Link> for a wide variety of movies!</h2>
        </div>
    )
}

export default HomePage