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
    };

    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
  }

  handleSearchQueryChange(query) {
    this.setState({
      searchQuery: query,
    })
  }

  updateViewerRating(string) {
    return string.replace(".", "");
  }  
  render() {
    dummyData['imdbRating'] = this.updateViewerRating(dummyData['imdbRating']);
    return (
      <div id="content">
        {this.state.searchQuery ? 
        <ResultsView 
        query={this.state.searchQuery}/> : 
        <InitialView
        onSearchQueryChange={this.handleSearchQueryChange}/>}
        <Footer />
      </div>
    )
  }
}

export default App;