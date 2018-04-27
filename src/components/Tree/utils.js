import _ from 'lodash';

export function toggleChildrenVisibility(tree, path) {
  const clonedTree = _.cloneDeep(tree);
  const curVisibility =
    _.get(clonedTree, `${path}.left.visible`) &&
    _.get(clonedTree, `${path}.left.visible`);

  _.set(clonedTree, `${path}.left.visible`, !curVisibility);
  _.set(clonedTree, `${path}.right.visible`, !curVisibility);

  return clonedTree;
}
