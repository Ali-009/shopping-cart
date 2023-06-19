import '../styles/HomePage.css'
import HomePageBG from '../assets/homepage-bg.webp'

function HomePage(){
    return (
        <div className='homepage-container'>
            <img src={HomePageBG} alt="Background Image From Extra Terrestrial" />
        </div>
    )
}

export default HomePage