import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Motto from './components/Motto/Motto';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <main>
      <Logo />
      <SearchBar />
      <Motto />
    </main>
  );
}

export default App;
