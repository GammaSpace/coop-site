<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { marked, Renderer } from "marked";
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;

  const defaultRenderer = new Renderer();
  let headerWidth: number;
  let screenshots: string = "";
  let links: string = "";
  let impact: string = "";
  $: headerWidth;

  const screenshotRenderer = {
    image(href: string, title: string, text: string) {
      return `
        <img class="w-full mx-auto overflow-hidden" src="${href}"" title="${title}" alt="${text}"/>
      `;
    },
    paragraph(text: string) {
      return `${text}`;
    },
  };

  const impactRenderer = {
    paragraph(text: string) {
      return `
        <div class="flex flex-wrap relative rounded-sm my-4 mt-6 bg-gammaYellowLight">
          <div class="relative impact-icon w-[45px] rounded-sm bg-black">
            <img class="absolute w-full px-[6px] pt-[6px]" src="/images/icons/impact.svg"/>
          </div>
          <div class="px-2 py-1 w-[calc(100%-45px)]"><p class="my-0 py-0">${text}</-></div>
        </div>
      `;
    },
  };

  const linksRenderer = {
    image: defaultRenderer.image,
    paragraph: defaultRenderer.paragraph,
    link(href: string, title: string, text: string) {
      return `
        <a class="pl-2" href="${href}">${text}</a>
      `;
    },
  };

  function initCustomMarked() {
    marked.use({ renderer: screenshotRenderer });
    screenshots = marked.parse(data.screenshots);
    marked.use({ renderer: impactRenderer });
    impact = marked.parse(data.impact);
    marked.use({ renderer: linksRenderer });
    links = marked.parse(data.links);
  }

  onMount(() => {
    initCustomMarked();
  });
</script>

<svelte:window bind:innerWidth={headerWidth} />

<div
  class="-z-10 -mt-9 md:-mt-11 -ml-12 md:-ml-16 h-[280px] md:h-[460px] md:-top-32 left-0 w-[calc(100%+80px)] md:w-[calc(100%+128px)] md:h-1/4"
>
  <img class="w-full h-full mx-auto object-cover" src={data.hero} />
  <div
    class="absolute top-8 md:top-[60px] left-4 md:left-8 max-w-[240px] md:max-w-[360px] h-auto"
  >
    <img src={data.logo} />
  </div>
</div>
<div>
  <h1 class="mb-4">{data.title}</h1>
  <div class="lg:grid lg:grid-cols-2 pt-4 gap-8 lg:gap-12 xl:gap-16">
    <div>
      <div class="rounded-md border-2 px-4 pb-4 mb-6 border-black">
        <SvelteMarkdown source={data.intro} />
      </div>
      <h2>Description</h2>
      <SvelteMarkdown source={data.description} />
      <h2>Features</h2>
      <SvelteMarkdown source={data.features} />
      <h2>Impact</h2>
      {@html impact}
      <div class="hidden xl:block mt-8">
        <h1>About {data.author}</h1>
        <SvelteMarkdown source={data.about} />
      </div>
    </div>
    <div>
      <h2 class="lg:hidden mt-6 lg:mt-0 mb-6">Screenshots</h2>
      <div class="screenshot-box">
        <SvelteMarkdown source={data.screenshots} />
      </div>
      <h3 class="mb-2">Links</h3>
      <div class="link-box bg-black px-4 py-2 mb-6">
        {@html links}
      </div>
    </div>
  </div>
  <div class="xl:hidden my-4 mt-8 mb-6">
    <h1>About {data.author}</h1>
    <SvelteMarkdown source={data.about} />
  </div>
  <div class="my-4">
    <h1 class="xl:mt-8 mb-4">Gamma Space Publishing</h1>
    <div class="rounded-md border-2 px-4 pb-4 border-black">
      <SvelteMarkdown source={data.gamma} />
    </div>
  </div>
</div>
