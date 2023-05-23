import CatalogueDisplay from './components/CatalogueDisplay';
import './styles/App.css';
import './styles/CatalogueDisplay.css';
import actionMovies from './assets/action-movies/action-movies-data';

function App() {
  return (
    <div>
      <CatalogueDisplay header='Action Movies' movieData={actionMovies}/>
    </div>
  )
}

export default App;
