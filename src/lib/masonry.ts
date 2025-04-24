import { browser } from '$app/environment';

async function createMasonryGrid(node: HTMLElement, opts = {}) {
  // @ts-expect-error missing Macy types
  const { default: Macy } = await import('macy');

  Macy({
    container: node,
    margin: 10,
    columns: 15,
    breakAt: {
      1680: {
        columns: 4
      },
      960: {
        columns: 3
      },
      520: {
        columns: 2
      },
      420: {
        columns: 1
      }
    },
    ...opts
  });
}

export function masonry(node: HTMLElement, opts = {}) {
  if (browser) {
    createMasonryGrid(node, opts);
  }
}
