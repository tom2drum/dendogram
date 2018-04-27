import React, { Component } from 'react';
import { isExpanded, filterOutNodeCollapsedClass } from './utils';
import './styles.css';

class Node extends Component {
  state = {
    classNames: ['Node'],
  };

  componentDidMount() {
    const {
      node,
      node: { path },
    } = this.props;
    const steps = path.split('.');
    const type = steps[steps.length - 1];

    const newState = {
      ...this.state,
      classNames: [
        ...this.state.classNames,
        `Node__${type}`,
        `Node__level-${steps.length}`,
        ...(!isExpanded(node) ? ['Node-collapsed'] : []),
      ],
    };
    this.setState(newState);
  }

  handleCircleClick = () => {
    const { node, onClick } = this.props;
    const { classNames } = this.state;
    function onClickCallback() {
      onClick(node);
    }

    if (!node.left && !node.right) return;

    const newClassNames = isExpanded(node)
      ? [...classNames, 'Node-collapsed']
      : classNames.filter(filterOutNodeCollapsedClass);

    this.setState(
      {
        ...this.state,
        classNames: newClassNames,
      },
      () => {
        if (isExpanded(node)) {
          setTimeout(onClickCallback, 600);
        } else {
          onClickCallback();
        }
      },
    );
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
