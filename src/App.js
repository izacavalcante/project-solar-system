import React from 'react';
import Hearder from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <section>
        <p>Sistema Solar</p>
        <Hearder />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
