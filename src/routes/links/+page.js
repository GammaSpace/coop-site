/** @type {import('../$types').PageLoad} */
export async function load({ fetch, params }) {
  const links = await (await fetch(`/content/links/links.md`)).text();
  
	return {
    links
	}
}
