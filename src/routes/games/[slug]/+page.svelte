<script lang="ts">
  import SvelteMarkdown from 'svelte-markdown';

  /** @type {import('./$types').PageData} */
	export let data;

  let headerWidth: number;
  $: headerWidth;
</script>

<svelte:window bind:innerWidth={headerWidth} /> 

<div class="-z-10 -mt-9 md:-mt-11 -ml-12 md:-ml-16 h-[280px] md:h-[460px] md:-top-32 left-0 w-[calc(100%+80px)] md:w-[calc(100%+128px)] md:h-1/4">
  <img class="w-full h-full mx-auto object-cover" src={data.hero} />
  <div class="absolute top-8 md:top-[60px] left-4 md:left-8 max-w-[240px] md:max-w-[360px] h-auto">
    <img src={data.logo}/>
  </div>    
</div>
<div>
<h1 class="mb-4">{data.title}</h1>
<div class="md:grid md:grid-cols-2 pt-4 gap-4 lg:gap-16">
  <div>
    <div class="rounded-md border-2 px-4 pb-4 mb-6 border-black">
      <SvelteMarkdown source={data.intro} />
    </div>
    <h2>Full Description</h2>
    <SvelteMarkdown source={data.description} />
    <h2>Features</h2>
    <SvelteMarkdown source={data.features} />
  </div>
  <div>
    <div class="screenshot-box">
      <div class="bg-purple-200 mb-8">
        <img class="w-full mx-auto overflow-hidden" src="/images/irp_image.png"/>
      </div>
      <div class="bg-purple-200 mb-8">
        <img class="w-full mx-auto overflow-hidden" src="/images/irp_image.png"/>
      </div>
      <div class="bg-purple-200 mb-8">
        <img class="w-full mx-auto overflow-hidden" src="/images/irp_image.png"/>
      </div>
    </div>
    <h3 class="mb-1">Links</h3>
    <div class="link-box bg-black px-4 py-2 mb-6">
      <p><a href="/">Link 1</a></p>
      <p><a href="/">Link 2</a></p>
      <p><a href="/">Link 3</a></p>
    </div>
  </div>
</div>  
<div class="my-4 mb-6">
  <h1>About {data.author}</h1>
  <SvelteMarkdown source={data.about} />
</div>
<div class="my-4 ">
  <h1 class="mb-4">Gamma Space Publishing</h1>
  <div class="rounded-md border-2 px-4 pb-4 border-black">
    <SvelteMarkdown source={data.gamma} />
  </div>
</div>
  <!--h2 class="mt-12">Our Programs</h2>
  <h3 class="pb-2">Peer Accelerator</h3>
  <div class="rounded-md border-2 px-4 pb-4 border-black">
    <div class="lg:grid lg:grid-cols-2 gap-16">
      <SvelteMarkdown source={PeerAccelerator} />
    </div>  
  </div>
  <h3 class="pt-4 pb-2">Publishing</h3>
  <div class="rounded-md border-2 px-4 pb-4 border-black">
    <div class="lg:grid lg:grid-cols-2 gap-16">
      <SvelteMarkdown source={Publishing} />
    </div>  
  </div-->
</div>
