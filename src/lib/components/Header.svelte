<script>
  import { gsLogo, gamma_burst_white } from "$lib/svg/svg.js"; 
  import { page } from "$app/stores";

  const menu = [
    ["Home","/"],
    //["About","/about"],
    ["FAQ","/faq"],
  ]

  $: navOpen = false;
  
  let yPos = 0;

  $: path = $page.url.pathname;
</script>

<svelte:window bind:scrollY={yPos} /> 

<nav class="top-0 w-full fixed md:relative z-10 md:px-6 md:max-w-screen-xl md:mx-auto">
  <div class="main-header hidden md:block px-12 py-4">    
    {#if path != "/"}
      <div class="max-w-[150px]"><a href="/">{@html gsLogo}</a></div>
    {/if}      
    <div class="absolute right-24 top-2">
      [{#each menu as item, index}
        <span class="px-3 uppercase "><a href="{item[1]}">{item[0]}</a></span>
        {#if index < menu.length - 1}|{/if}
      {/each}]
    </div>
  </div>
  <div class="md:hidden relative">
    <div class="main-menu bg-black px-12 pt-[60px] text-center overflow-hidden {navOpen ? `max-h-[400px]` : `max-h-[60px]`}">
      {#each menu as item}
        <div class="py-4"><a class="text-white text-xl uppercase" on:click={()=>{navOpen = !navOpen;}} href="{item[1]}">[{item[0]}]</a></div>
      {/each}
      <div class="absolute top-0 right-8 ">
        <p><button class="text-white -mt-1 -mr-5 w-[45px] h-auto" on:click={()=>{navOpen = !navOpen;}}>{@html gamma_burst_white}</button></p>
      </div>
    </div>
  </div>
</nav>