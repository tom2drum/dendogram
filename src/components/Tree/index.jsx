import React, { Component } from 'react';

import Node from '../Node';
import tree from '../../data/tree';

class Tree extends Component {
  state = {
    tree,
  };

  renderChildren({ left, right }) {
    return (
      <div>
        {right && right.visible ? (
          <Node node={right}>{this.renderChildren(right)}</Node>
        ) : null}
        {left && left.visible ? (
          <Node node={left}>{this.renderChildren(left)}</Node>
        ) : null}
      </div>
    );
  }

  render() {
    const { root } = this.state.tree;
    return (
      <div>
        <Node node={root} children={this.renderChildren(root)} />
      </div>
    );
  }
}

export default Tree;
