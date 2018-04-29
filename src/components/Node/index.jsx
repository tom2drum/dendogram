import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isExpanded, isLeaf, filterOutNodeCollapsedClass } from './utils';
import './styles.css';
import Edge from './Edge';

const ANIMATION_TIME = 500;

class Node extends Component {
  static propTypes = {
    node: PropTypes.shape({
      path: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
  };

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
        `Node__level-${steps.length - 1}`,
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
          setTimeout(onClickCallback, ANIMATION_TIME);
        } else {
          onClickCallback();
        }
      },
    );
  };

  renderEdges() {
    const { node } = this.props;

    return (
      isExpanded(node) &&
      !isLeaf(node) && (
        <div>
          {node.right && <Edge classes="Edge__right" />}
          {node.left && <Edge classes="Edge__left" />}
        </div>
      )
    );
  }

  render() {
    const { value } = this.props.node;
    return (
      <div className={this.state.classNames.join(' ')}>
        <span className="Node__label">{value}</span>
        <div
          className="Node__circle"
          onClick={this.handleCircleClick}
          role="button"
          tabIndex="0"
        />
        {this.renderEdges()}
        {this.props.children}
      </div>
    );
  }
}

export default Node;
