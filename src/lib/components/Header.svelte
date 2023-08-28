<script>
  const menu = [
    ["Home","/"],
    ["About","/about"],
    ["FAQs","/faq"],
  ]

  $: navOpen = false;
  
  let yPos = 0;
</script>

<svelte:window bind:scrollY={yPos} /> 

<nav class="top-0 w-full fixed md:relative z-10">
  <div class="main-header hidden md:block px-12 py-4">
    {#each menu as item}
      <span class="pr-12"><a href="{item[1]}">{item[0]}</a></span>
    {/each}
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