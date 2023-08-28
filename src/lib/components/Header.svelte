<script>
  import { gsLogo } from "$lib/svg/svg.js"; 
  import { page } from "$app/stores";

  const menu = [
    ["Home","/"],
    ["About","/about"],
    ["FAQ","/faq"],
  ]

  $: navOpen = false;
  
  let yPos = 0;

  $: path = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos} /> 

<nav class="top-0 w-full fixed md:relative z-10">
  <div class="main-header hidden md:block px-12 py-4">
    {#if path != "/"}
      <div class="max-w-[150px]">{@html gsLogo}</div>
    {/if}      
    <div class="absolute right-24 top-2">
      [{#each menu as item, index}
        <span class="px-3 uppercase "><a href="{item[1]}">{item[0]}</a></span>
        {#if index < menu.length - 1}|{/if}
      {/each}]
    </div>
  </div>
  <div class="md:hidden relative">
    <div class="main-menu bg-yellow-200 px-12 pt-[60px] text-center overflow-hidden {navOpen ? `max-h-[400px]` : `max-h-[60px]`}">
      {#each menu as item}
        <div class="py-4"><a on:click={()=>{navOpen = !navOpen;}} href="{item[1]}">{item[0]}</a></div>
      {/each}
      <div class="absolute top-0 right-8">
        <p><button on:click={()=>{navOpen = !navOpen;}}>Open</button></p>
      </div>
    </div>
  </div>
</nav>