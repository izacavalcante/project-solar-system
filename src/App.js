import './App.css';
import React from 'react';
import Hearder from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <section>
        <Hearder />
        <SolarSystem />
        <Missions />
        <div className="stars" ></div>
      </section>
    );
  }
}

export default App;
