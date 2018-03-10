import React, { Component } from 'react';
import Map from './Map';
import Timeline from './Timeline';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Map /> */}
        <Timeline />
        <footer className="footer">
          <a href="https://github.com/Unknow-Y/jikeyingmi2017">
             Code by Marvin.J.Duo with Love
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
