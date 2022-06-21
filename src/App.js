import React from 'react';
import Hearder from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <section>
        <p>Sistema Solar</p>
        <Hearder />
        <SolarSystem />
      </section>
    );
  }
}

export default App;
