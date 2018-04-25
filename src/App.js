import React, { Component } from 'react';

import Node from './components/Node';
import './App.css';
import tree from './data/tree';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Node node={tree.root} />
      </div>
    );
  }
}

export default App;
