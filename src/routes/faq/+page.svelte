<script lang="ts">
  import ValuesFaq from "$lib/content/faq/ValuesFaq.md?raw";
  import FaqIntro from "$lib/content/faq/FaqIntro.md?raw";
  import SvelteMarkdown from 'svelte-markdown'; 

  let toCValues: Array<string>;
  let toCCoop: Array<string>;
  let toCMember: Array<string>;

  const sanitizeRegex = /[^\w-]+/g

  const idRenderer = {
    heading(text:string, level:string) {
      const dashed = text.replace(/ /g,`-`);
      const target = dashed.replace(sanitizeRegex,``).toLowerCase();
      console.log(target);
      return `
        <h${level} id="${dashed}">
          ${text}
        </h${level}>
      `;
    }
  };

  function createToC(event, toC) {
    let tempToC:Array<string> = [];
    event.detail.tokens.forEach((val,index)=>{
      if ( val.type == "heading" ) {
      const dashed = val.text.replace(/ /g,`-`);
      const target = dashed.replace(sanitizeRegex,``).toLowerCase();
        tempToC.push(
          `<h${val.depth} class="faq">
            <a href="#${target}">
              ${val.text}
            </a>
          </h${val.depth}>`
        );
      } else if ( val.type == "paragraph" ) {
        val.raw = val.raw.replace(/\[\^([0-9]+)\]/g, `<sup>$1</sup>`);
      } else if ( val.type == "list" ) {
        val.items.forEach(item=>{
          item.raw.replace(/\[\^([0-9]+)\]/g, `<sup>$1</sup>`);
        })
      }
    });
    switch ( toC ) {
      case "values":
        toCValues = [];
        toCValues = tempToC;
        break;
      case "coop":
        toCCoop = [];
        toCCoop = tempToC;
        break;
      case "member":
        toCMember = [];
        toCMember = tempToC;
        break;
    }
  }
</script>

<div class="max-w-[800px]">
  <div>
    <div class="intro">
      <SvelteMarkdown source={FaqIntro} />
    </div>
  </div>
</div>
<div class="md:w-3/4 mt-16 lg:w-full">
  <div class="values-faq mb-12">
    <h2 class="w-full mb-8">Values</h2>
    <div class="w-full lg:grid lg:grid-cols-2 gap-8">
      <div class="faq-q">
        {#if toCValues != undefined}
          {#each toCValues as q}
            {@html q}
          {/each}
        {/if}
      </div>
      <div class="faq-a px-4 pb-4 bg-yellow-100">
        <SvelteMarkdown 
          renderers={{idRenderer}} 
          source={ValuesFaq} 
          on:parsed={(ev)=>createToC(ev, "values")}
        />
      </div>
    </div>
  </div>
  <div class="coop-faq">
    <h2 class="w-full mb-8">Co-op</h2>
    <div class="w-full lg:grid lg:grid-cols-2 gap-8">
      <div class="faq-q">
        {#if toCValues != undefined}
          {#each toCValues as q}
            {@html q}
          {/each}
        {/if}
      </div>
      <div class="faq-a px-4 pb-4 bg-yellow-100">
        <SvelteMarkdown 
          renderers={{idRenderer}} 
          source={ValuesFaq} 
          on:parsed={(ev)=>createToC(ev, "values")}
        />
      </div>
    </div>
  </div>
</div>