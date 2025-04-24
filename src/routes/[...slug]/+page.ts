import { findPage } from '$lib/pages';

export async function load({ params }) {
  const page = await findPage(params.slug);

  return {
    page
  };
}
