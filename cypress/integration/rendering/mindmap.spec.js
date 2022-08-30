import { imgSnapshotTest, renderGraph } from '../../helpers/util.js';

describe('Mindmaps', () => {
  it('Only a root', () => {
    imgSnapshotTest(
      `mindmap
root
    `,
      {}
    );
  });

  it('a root with a shape', () => {
    imgSnapshotTest(
      `mindmap
root[root]
    `,
      {}
    );
  });

  it('a root with an icon', () => {
    imgSnapshotTest(
      `mindmap
root[root]
::icon(mdi mdi-fire)
    `,
      {}
    );
  });

  it('braches', () => {
    imgSnapshotTest(
      `mindmap
root
  child1
      grandchild 1
      grandchild 2
  child2
      grandchild 3
      grandchild 4
  child3
      grandchild 5
      grandchild 6
    `,
      {}
    );
  });

  it('braches with shapes and labels', () => {
    imgSnapshotTest(
      `mindmap
root
  child1((Circle))
      grandchild 1
      grandchild 2
  child2(Round rectangle)
      grandchild 3
      grandchild 4
  child3[Square]
      grandchild 5
      ::icon(mdi mdi-fire)
      gc6((grand<br/>child 6))
      ::icon(mdi mdi-fire)
    `,
      {}
    );
  });

  /* The end */
});
