<script lang="ts">
  import ValuesFaq from "$lib/content/faq/ValuesFaq.md?raw";
  import MemberFaq from "$lib/content/faq/MemberFaq.md?raw";
  import CoopFaq from "$lib/content/faq/CoopFaq.md?raw";
  import FaqIntro from "$lib/content/faq/FaqIntro.md?raw";
  import SvelteMarkdown from 'svelte-markdown'; 
  import { marked } from "marked";
  import { onMount } from "svelte";

  const tabs = [
    [ "Values", ValuesFaq ],
    [ "Co-op", CoopFaq ],
    [ "Membership", MemberFaq ]
  ]

  let currentTab = 0;
  let questions:Array<string>;
  let answers:Array<Array<string>>;
  let qIndex:number = -1;
  let faqSource = tabs[currentTab][1];
  let faqParsed = ``;
  
  function changeTab( index:number ) {
    currentTab = index;
    questions = [];
    answers = [];
    qIndex = -1;
    faqSource = tabs[currentTab][1];
    faqParsed = marked.parse(faqSource);
  }

  const renderer = {
    heading(text, level) {
      return `
        <div class="faq-q">
          <h${level}>
            ${text}
          </h${level}>
        </div>
      `
    },
    paragraph(text) {
      return `
        <p class="pb-8 lg:pb-0">${text}</p>
      `
    }
  }

  marked.use({ renderer })

  onMount( ()=>{
    changeTab( 0 );
  })
</script>

<div class="max-w-[800px]">
  <div>
    <div class="intro">
      <SvelteMarkdown source={FaqIntro} />
    </div>
  </div>
</div>
<div class="md:w-3/4 mt-16 lg:w-full">
  <div class="values-faq">
    <div class="">
      {#each tabs as tab, index}
        <h2 class="inline w-full mb-8 mr-1 md:mr-4 pb-1 {currentTab == index ? `bg-black text-white` : ``}">
          <button class="{ currentTab != index ? `underline` : ``} px-2 text-xl md:text-3xl" on:click={()=>changeTab( index )}>
            {tabs[index][0]}
          </button>
        </h2>
      {/each}
    </div>
  </div>
</div>
<hr class="w-full border-2 mt-1 border-black">
<div class="md:w-3/4 lg:w-full pt-2">
  <div class="values-faq mb-12">
    <div class="lg:grid lg:grid-cols-2 gap-8 mb-4">
      {@html faqParsed}
    </div>
  </div>
</div>