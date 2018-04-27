import React, { Component } from 'react';

import './styles.css';

class Node extends Component {
  state = {
    classNames: ['Node'],
  };

  componentDidMount() {
    const { path } = this.props.node;
    const steps = path.split('.');
    const type = steps[steps.length - 1];

    const newState = {
      ...this.state,
      classNames: [
        ...this.state.classNames,
        `Node__${type}`,
        `Node__level-${steps.length}`,
      ],
    };
    this.setState(newState);
  }

  handleCircleClick = () => {
    this.props.onClick(this.props.node);
  };

  render() {
    const { value } = this.props.node;
    return (
      <div className={this.state.classNames.join(' ')}>
        <span className="Node__label">{value}</span>
        <div className="Node__circle" onClick={this.handleCircleClick} />
        {this.props.children}
      </div>
    );
  }
}

export default Node;
