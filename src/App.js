import React from 'react';
import InitialView from './components/InitialView/InitialView';
import ResultsView from './components/ResultsView/ResultsView';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
      movieData: {},
    };

    this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    this.handleAPIReturn = this.handleAPIReturn.bind(this);
  }

  handleSearchQueryChange(query) {
    this.setState({
      searchQuery: query,
      movieData: {},
    })
  }

  handleAPIReturn(data) {
    this.setState({
      movieData: data,
    })
  }

  render() {
    return (
      <div id="content">
        {this.state.searchQuery ? 
        <ResultsView 
        query={this.state.searchQuery}
        movieData={this.state.movieData}
        onSearchQueryChange={this.handleSearchQueryChange}
        onAPIReturn={this.handleAPIReturn}/> : 
        <InitialView
        onSearchQueryChange={this.handleSearchQueryChange}/>}
        <Footer />
      </div>
    )
  }
}

export default App;