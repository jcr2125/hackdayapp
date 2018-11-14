import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCard from './components/search_card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchCard/>
      </div>
    );
  }
}

export default App;
