import React from 'react';
import './App.css';
import InitialView from './components/InitialView/InitialView';
import ResultsView from './components/ResultsView/ResultsView';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    const showResults = false;
    return (
      <div id="content">
        {showResults ? <ResultsView /> : <InitialView />}
        <Footer />
      </div>
    )
  }
}

export default App;