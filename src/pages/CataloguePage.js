import {useState} from 'react'
import DetailsPane from '../components/DetailsPane'
import CollectionDisplay from '../components/CollectionDisplay';
import '../styles/CataloguePage.css';
import actionMovies from '../assets/action-movies/action-movies-data';
import dramaMovies from '../assets/drama-movies/drama-movies-data';

function CataloguePage({cart, setCart}) {
    //The initial selection is a random movie from the first four movies displayed
    const [currentSelection, setCurrentSelection] = useState(dramaMovies[Math.floor(Math.random() * 4)])
    return (
      <div className='catalogue-page'>
        <div className="collections-column">
          <CollectionDisplay header='Drama' movieData={dramaMovies}
          currentSelection={currentSelection} setCurrentSelection={setCurrentSelection}
          cart={cart} setCart={setCart}/>
          <CollectionDisplay header='Action' movieData={actionMovies}
          currentSelection={currentSelection} setCurrentSelection={setCurrentSelection}
          cart={cart} setCart={setCart}/>
        </div>
        <DetailsPane currentSelection={currentSelection}/>
      </div>
    )
}

export default CataloguePage