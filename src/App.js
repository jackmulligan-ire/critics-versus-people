import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Motto from './components/Motto/Motto';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div id="content">
      <main>
        <Logo />
        <SearchBar />
        <Motto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
