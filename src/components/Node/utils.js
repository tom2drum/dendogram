export function isExpanded(node) {
  return (
    isLeaf(node) ||
    (node.left && node.left.visible) ||
    (node.right && node.right.visible)
  );
}

export function isLeaf(node) {
  return !node.left && !node.right;
}

export function filterOutNodeCollapsedClass(className) {
  return className !== 'Node-collapsed';
}
