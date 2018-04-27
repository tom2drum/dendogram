import _ from 'lodash';

export function expandChildren(tree, path) {
  const clonedTree = _.cloneDeep(tree);
  const isNodeExpanded =
    _.get(clonedTree, `${path}.left.visible`) &&
    _.get(clonedTree, `${path}.right.visible`);

  _.set(clonedTree, `${path}.left.visible`, !isNodeExpanded);
  _.set(clonedTree, `${path}.right.visible`, !isNodeExpanded);

  return clonedTree;
}
