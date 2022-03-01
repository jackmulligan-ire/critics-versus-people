import React from 'react';
import './App.css';
import InitialView from './components/InitialView/InitialView';
import ResultsView from './components/ResultsView/ResultsView';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const showResults = true;
    return (
      <div id="content">
        {showResults ? <ResultsView data={DUMMY_DATA}/> : <InitialView />}
        <Footer />
      </div>
    )
  }
}

const DUMMY_DATA = {
  "title": "Fight Club",
  "year" : "1999",
  "Metascore" : "66",
  "imdbRating" : "8.8",
  "Plot" : "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  "Director": "David Fincher",
  "Actors": "Brad Pitt, Edward Norton, Meat Loaf",
  "imdbID": "tt0137523",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
};

export default App;