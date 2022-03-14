import React from 'react';
import InitialView from './components/InitialView/InitialView';
import ResultsView from './components/ResultsView/ResultsView';
import Footer from './components/Footer/Footer';

// Test JSON file to see what components look like
const dummyData = require('./dummy-data.json');

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      movieData: {},
    };
  }
  updateViewerRating(string) {
    return string.replace(".", "");
  }  
  render() {
    dummyData['imdbRating'] = this.updateViewerRating(dummyData['imdbRating']);
    return (
      <div id="content">
        {this.state.searchQuery ? <ResultsView data={dummyData}/> : <InitialView />}
        <Footer />
      </div>
    )
  }
}

export default App;