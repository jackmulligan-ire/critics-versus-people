import React from 'react';
import './App.css';
import InitialView from './components/InitialView/InitialView';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div id="content">
        <InitialView />
        <Footer />
      </div>
    )
  }
}

export default App;