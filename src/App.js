import React from 'react';
import './App.css';
import InitialView from './components/InitialView/InitialView';
import ResultsView from './components/ResultsView/ResultsView';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Test JSON file to see what components look like
const dummyData = require('./dummy-data.json');

class App extends React.Component {
  updateViewerRating(string) {
    return string.replace(".", "");
  }  
  render() {
    const showResults = true;
    dummyData['imdbRating'] = this.updateViewerRating(dummyData['imdbRating']);
    return (
      <div id="content">
        {showResults ? <ResultsView data={dummyData}/> : <InitialView />}
        <Footer />
      </div>
    )
  }
}

export default App;