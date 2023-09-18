<script>
  import { gsLogo } from "$lib/svg/svg.js";
  import SvelteMarkdown from "svelte-markdown";
  import GSAbout from "$lib/content/home/GSAbout.md?raw";
  import PeerAccelerator from "$lib/content/home/PeerAccelerator.md?raw";
  import Publishing from "$lib/content/home/Publishing.md?raw";
  import IRP from "$lib/content/home/IRP.md?raw";
  import MemberJam from "$lib/content/home/MemberJam.md?raw";
  import { marked } from "marked";
  import customHeadingId from "marked-custom-heading-id";
  
  marked.use(customHeadingId());
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
<div class="text-center my-8 md:text-left">
  <a
    class="bg-black no-underline uppercase inline-block text-lg text-white px-4 py-1 rounded-lg mr-2"
    href="http://eepurl.com/dqLW3v"
    target="_blank"
  >
    Mailing List Signup
  </a>
</div>
<div>
  <h2 class="mt-12">Our Programs</h2>
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
  </div>
</div>
<h2 class="pt-8">Current Activities</h2>
<div class="md:grid md:grid-cols-2 pt-4 gap-4 lg:gap-8">
  <div class="activity-box">
    <h4>Investment Readiness Program</h4>
    <div class="bg-purple-200 mb-8">
      <img class="w-full mx-auto overflow-hidden" src="/images/irp_image.png"/>
    </div>
    <SvelteMarkdown source={IRP} />
  </div>
  <div class="activity-box">
    <h4>Member Game Jam</h4>
    <div class="bg-purple-200 mb-8">
      <img class="w-full mx-auto overflow-hidden" src="/images/jam_image.png"/>
    </div>
    <SvelteMarkdown source={MemberJam} />
  </div>
</div>
