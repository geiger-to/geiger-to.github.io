import { findPages } from '$lib/pages';

export async function entries() {
  const pages = await findPages();

  return pages
    .map((page) => page.slugs)
    .flat()
    .map((slug) => ({ slug }));
}
