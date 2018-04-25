import React, { Component } from 'react';

import './styles.css';

class Node extends Component {
  render() {
    const { value } = this.props.node;
    return (
      <div className="Node">
        <span className="Node__label">{value}</span>
        <div className="Node__circle" />
      </div>
    );
  }
}

export default Node;
