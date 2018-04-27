export default {
  root: {
    value: 'Artificial Intelligence',
    visible: true,
    path: 'root',
    left: {
      value: 'Engine Intelligence',
      visible: true,
      path: 'root.left',
      left: {
        value: 'Neuro-like Networks',
        visible: true,
        path: 'root.left.left',
      },
      right: {
        value: 'Heuristic Programming',
        visible: true,
        path: 'root.left.right',
        right: {
          value: 'Heuristic Modeling',
          visible: false,
          path: 'root.left.right.right',
        },
      },
    },
    right: {
      value: 'Core Intelligence',
      visible: true,
      path: 'root.right',
    },
  },
};
