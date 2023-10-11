<script lang="ts">
  import { marked, Renderer } from 'marked';
  import { onMount } from 'svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  const defaultRenderer = new Renderer();

  let headerWidth: number;
  let links:string = "";
  $: headerWidth;

  const linksRenderer = {
    image:defaultRenderer.image,
    paragraph:defaultRenderer.paragraph,
    link(href:string, title:string, text:string) {
      return `
        <a href="${href}">${text}</a>
      `
    }
  }

  function initCustomMarked() {
    marked.use({renderer:linksRenderer});
    links = marked.parse( data.links );
  }

  onMount(()=>{
    initCustomMarked();
  })
</script>

<div class="link-box link-sep px-4 py-2 mb-6 md:max-w-[700px] md:mx-auto">
  {@html links}
</div>