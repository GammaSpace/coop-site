/** @type {import('../$types').PageLoad} */
export async function load({ fetch, params }) {
  const title = await (await fetch(`/content/games/${params.slug}/title.md`)).text();
  const author = await (await fetch(`/content/games/${params.slug}/author.md`)).text();
  const intro = await (await fetch(`/content/games/${params.slug}/intro.md`)).text();
  const description = await (await fetch(`/content/games/${params.slug}/description.md`)).text();
  const features = await (await fetch(`/content/games/${params.slug}/features.md`)).text();
  const about = await (await fetch(`/content/games/${params.slug}/about.md`)).text();
  const links = await (await fetch(`/content/games/${params.slug}/links.md`)).text();
  const screenshots = await (await fetch(`/content/games/${params.slug}/screenshots.md`)).text();
  const logo = URL.createObjectURL( await (await fetch(`/content/games/${params.slug}/logo.png`)).blob() );
  const hero = URL.createObjectURL( await (await fetch(`/content/games/${params.slug}/hero.png`)).blob() );
  const gamma = await (await fetch(`/content/games/gammapub.md`)).text();
  
	return {
    title,
    author,
    intro,
    description,
    features,
    about,
    links,
    screenshots,
    logo,
    hero,
    gamma
	}
}
