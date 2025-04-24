import type { Page } from '$lib/types';

let PAGES: Page[] | null = null;

const findPages = async () => {
  if (PAGES) {
    return PAGES;
  }

  let pages: Page[] = [];

  const paths = import.meta.glob('@/pages/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const filename = path.split('/').at(-1).replace('.md', '');

    if (file && typeof file === 'object' && 'metadata' in file) {
      const page = {
        ...file.metadata,
        path: filename,
        date: new Date(file.metadata.date)
      } satisfies Page;

      pages.push(page);
    }
  }

  pages = pages.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  PAGES = pages;

  return pages;
};

const findPage = async (slug: string): Promise<Page> => {
  const pages = await findPages();
  const page = pages.find((page: Page) => {
    return page.slugs.includes(slug);
  });

  if (page) {
    const markdown = await import(`@/pages/${page.path}.md`);

    page.markdown = markdown.default;
    page.slug = slug;
  }

  return page;
};

export { findPage, findPages };
