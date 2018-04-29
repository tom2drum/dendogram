export default {
  root: {
    value: 'Artificial Intelligence',
    visible: true,
    path: 'root',
    left: {
      value: 'Engine Intelligence',
      visible: false,
      path: 'root.left',
      left: {
        value: 'Neuro-like Networks',
        visible: false,
        path: 'root.left.left',
      },
      right: {
        value: 'Heuristic Programming',
        visible: false,
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
      visible: false,
      path: 'root.right',
    },
  },
};
