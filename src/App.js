import CatalogueDisplay from './components/CatalogueDisplay';
import './App.css';
import actionMovies from './movie-data/action-movies'

function App() {
  return (
    <div>
      <CatalogueDisplay movieData={actionMovies}/>
    </div>
  )
}

export default App;
