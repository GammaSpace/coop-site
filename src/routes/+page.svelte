<script>
  import { gsLogo } from "$lib/svg/svg.js";
  import SvelteMarkdown from "svelte-markdown";
  import GSAbout from "$lib/content/home/GSAbout.md?raw";
  import PeerAccelerator from "$lib/content/home/PeerAccelerator.md?raw"
</script>

<div class="max-w-[800px]">
  <div>
    <div class="mb-6 max-w-[300px]">
      {@html gsLogo}
    </div>
    <div class="intro">
      <SvelteMarkdown source={GSAbout} />
    </div>
  </div>
</div>
<div class="lg:grid lg:grid-cols-2 gap-8">
  <div></div>
  <div class="text-center my-8 lg:-my-12 md:text-left">
    <a
      class="bg-black no-underline uppercase inline-block text-lg text-white px-4 py-1 rounded-lg mr-2"
      href="http://eepurl.com/dqLW3v"
      target="_blank"
    >
      Mailing List Signup
    </a>
  </div>
</div>
<div class="lg:grid lg:grid-cols-2 gap-8 pt-0 lg:pt-8">
  <div>
    <p class="text-xl">
      We are currently expanding learning and support for our work through two main programs:  
    </p>
  </div>
</div>
<div>
  <h2 class="py-4">Peer Accelerator</h2>
  <div class="rounded-md border-2 px-4 pb-4 border-black">
    <div class="lg:grid lg:grid-cols-2 gap-16">
      <SvelteMarkdown source={PeerAccelerator} />
    </div>  
  </div>
  <h2 class="py-4">Publishing</h2>
  <div class="rounded-md border-2 px-4 pb-4 border-black">
    <div class="lg:grid lg:grid-cols-2 gap-16">
      <SvelteMarkdown source={PeerAccelerator} />
    </div>  
  </div>
</div>
<h3 class="pt-8">Current Member Activities</h3>
<div class="lg:grid lg:grid-cols-2 pt-4 gap-8">
  <div class="bg-yellow-100 px-2 pb-2 mb-8">
    <h4>IRP</h4>
    <div class="h-[200px] bg-purple-200"></div>
    <p>Based on our community's collectively developed mentorship program, investors Weird Ghosts and Gamma Space have partnered to create a six-month program in support of emerging underrepresented founders and studios. Participants identify and solve studio development pain points by addressing the challenges of the "three Ps": Product, Production, and Pitching.</p>
  </div>
  <div class="bg-yellow-100 p-2 mb-8">
    <h4>Member Game Jam</h4>
    <div class="h-[200px] bg-purple-200"></div>
    <p>Based on our community's collectively developed mentorship program, investors Weird Ghosts and Gamma Space have partnered to create a six-month program in support of emerging underrepresented founders and studios. Participants identify and solve studio development pain points by addressing the challenges of the "three Ps": Product, Production, and Pitching.</p>
  </div>
</div>
