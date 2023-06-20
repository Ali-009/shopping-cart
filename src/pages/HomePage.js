import '../styles/HomePage.css'
import homePageBG from '../assets/homepage-bg.webp'

function HomePage(){
    return (
        <div className='homepage-container'>
            <img src={homePageBG} alt="Background From Extra Terrestrial" />
        </div>
    )
}

export default HomePage