import React, { Component } from 'react';

import Node from '../Node';
import tree from '../../data/tree';
import { expandChildren } from './utils';

import './styles.css';

class Tree extends Component {
  state = {
    tree,
  };

  handleNodeClick = ({ path, left, right }) => {
    if (!left && !right) return null;

    const undatedTree = expandChildren(this.state.tree, path);

    this.setState({
      ...this.state,
      tree: undatedTree,
    });
  };

  renderChildren({ left, right }) {
    return (
      (left || right) && (
        <div>
          {right &&
            right.visible && (
              <Node node={right} onClick={this.handleNodeClick}>
                {this.renderChildren(right)}
              </Node>
            )}
          {left &&
            left.visible && (
              <Node node={left} onClick={this.handleNodeClick}>
                {this.renderChildren(left)}
              </Node>
            )}
        </div>
      )
    );
  }

  render() {
    const { root } = this.state.tree;
    return (
      <div className="Tree">
        <Node node={root} onClick={this.handleNodeClick}>
          {this.renderChildren(root)}
        </Node>
      </div>
    );
  }
}

export default Tree;
