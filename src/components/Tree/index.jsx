import React, { Component } from 'react';

import Node from '../Node';
import tree from '../../data/tree';
import { toggleChildrenVisibility } from './utils';

class Tree extends Component {
  state = {
    tree,
  };

  handleNodeClick = ({ path, left, right }) => {
    if (!left && !right) return null;

    const undatedTree = toggleChildrenVisibility(this.state.tree, path);

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
      <div>
        <Node
          node={root}
          onClick={this.handleNodeClick}
          children={this.renderChildren(root)}
        />
      </div>
    );
  }
}

export default Tree;
