import React, { Component } from 'react';
// Stylesheet
import './css/Global.css';

// Import Components
import Nav from './Components/Global/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
