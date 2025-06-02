<script>
  import { gsLogo, gamma_burst_white } from "$lib/svg/svg.js"; 
  import { page } from "$app/stores";
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
   
  </div>
  
</nav>