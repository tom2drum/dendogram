import React, { Component } from 'react';
import _ from 'lodash/object';

import Node from '../Node';
import tree from '../../data/tree';

class Tree extends Component {
  state = {
    tree,
  };

  handleNodeClick = ({ path, left, right }) => {
    if (!left && !right) return null;

    const newState = JSON.parse(JSON.stringify(this.state));
    const curVisibility =
      _.get(newState, `tree.${path}.left.visible`) &&
      _.get(newState, `tree.${path}.left.visible`);

    _.set(newState, `tree.${path}.left.visible`, !curVisibility);
    _.set(newState, `tree.${path}.right.visible`, !curVisibility);

    this.setState(newState);
  };

  renderChildren({ left, right }) {
    return (
      (left || right) && (
        <div>
          {right && right.visible ? (
            <Node node={right} onClick={this.handleNodeClick}>
              {this.renderChildren(right)}
            </Node>
          ) : null}
          {left && left.visible ? (
            <Node node={left} onClick={this.handleNodeClick}>
              {this.renderChildren(left)}
            </Node>
          ) : null}
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
