import _ from 'lodash';

export function expandChildren(tree, path) {
  const clonedTree = _.cloneDeep(tree);
  const hasLeft = _.at(clonedTree, `${path}.left`)[0] !== undefined;
  const hasRight = _.at(clonedTree, `${path}.right`)[0] !== undefined;
  const isNodeExpanded =
    (hasLeft && _.get(clonedTree, `${path}.left.visible`)) ||
    (hasRight && _.get(clonedTree, `${path}.right.visible`));

  if (hasLeft) _.set(clonedTree, `${path}.left.visible`, !isNodeExpanded);
  if (hasRight) _.set(clonedTree, `${path}.right.visible`, !isNodeExpanded);

  return clonedTree;
}
