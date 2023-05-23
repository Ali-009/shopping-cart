import {useState} from 'react'
import DetailsPane from '../components/DetailsPane'
import CollectionDisplay from '../components/CollectionDisplay';
import '../styles/App.css';
import '../styles/CatalogueDisplay.css';
import actionMovies from '../assets/action-movies/action-movies-data';

function CataloguePage() {
    const [currentSelection, setCurrentSelection] = useState(null)
    return (
      <div className='CataloguePage'>
        <CollectionDisplay header='Action Movies' movieData={actionMovies} setCurrentSelection={setCurrentSelection}/>
        {currentSelection && <DetailsPane currentSelection={currentSelection}/>}
      </div>
    )
}

export default CataloguePage