import CatalogueDisplay from './components/CatalogueDisplay';
import './styles/App.css';
import './styles/CatalogueDisplay.css'
import actionMovies from './movie-data/action-movies'

function App() {
  return (
    <div>
      <CatalogueDisplay header='Action Movies' movieData={actionMovies}/>
    </div>
  )
}

export default App;
