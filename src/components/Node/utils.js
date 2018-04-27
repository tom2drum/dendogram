export function isExpanded(node) {
  return (
    (!node.left && !node.right) ||
    (node.left && node.right && node.left.visible && node.right.visible)
  );
}

export function filterOutNodeCollapsedClass(className) {
  return className != 'Node-collapsed';
}
