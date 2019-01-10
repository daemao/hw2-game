import React, { Component } from 'react';
import Game from "./components/game";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">
					<Game/>
      </div>
    );
  }
}

export default App;
