import React, { Component } from 'react';

import './styles.css';

class Node extends Component {
  handleCircleClick = () => {
    this.props.onClick(this.props.node);
  };

  render() {
    const { value } = this.props.node;
    return (
      <div className="Node">
        <span className="Node__label">{value}</span>
        <div className="Node__circle" onClick={this.handleCircleClick} />
        {this.props.children}
      </div>
    );
  }
}

export default Node;
