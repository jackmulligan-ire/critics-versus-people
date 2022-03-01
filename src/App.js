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
        {showResults ? <ResultsView /> : <InitialView />}
        <Footer />
      </div>
    )
  }
}

export default App;