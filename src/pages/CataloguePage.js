import {useState} from 'react'
import DetailsPane from '../components/DetailsPane'
import CollectionDisplay from '../components/CollectionDisplay';
import '../styles/CataloguePage.css';
import actionMovies from '../assets/action-movies/action-movies-data';

function CataloguePage({cart, setCart}) {
    const [currentSelection, setCurrentSelection] = useState(null)
    return (
      <div className='catalogue-page'>
        <CollectionDisplay header='Action Movies' 
        movieData={actionMovies} setCurrentSelection={setCurrentSelection}
        cart={cart} setCart={setCart}/>
        {currentSelection && <DetailsPane currentSelection={currentSelection}/>}
      </div>
    )
}

export default CataloguePage