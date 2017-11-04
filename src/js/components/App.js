import React, { Component } from 'react';
import './App.css';
import Frame from './Frame/Frame.jsx'
import Panel from './Panel/Panel.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame>
          <Panel />
        </Frame>
      </div>
    );
  }
}

export default App;
