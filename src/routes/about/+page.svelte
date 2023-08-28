<script>
  import { wgLogo, gsLogo, burstLogo } from "$lib/svg/svg.js";
  import SvelteMarkdown from "svelte-markdown";
  import GSAbout from "$lib/content/about/GSAbout.md?raw";
  import BGAbout from "$lib/content/about/BGAbout.md?raw";
  import PubAbout from "$lib/content/about/PubAbout.md?raw";
  import WGAbout from "$lib/content/about/WGAbout.md?raw";
</script>

<div class="lg:grid lg:grid-cols-2 gap-8">
  <div>
    <div class="mb-12 max-w-full">
      {@html gsLogo}
    </div>
    <div class="intro content">
      <SvelteMarkdown source={GSAbout} />
    </div>
    <a
      class="bg-black no-underline uppercase inline-block mt-6 text-lg text-white px-4 py-1 rounded-lg mr-2 mb-24"
      href="http://eepurl.com/dqLW3v"
      target="_blank"
    >
      Mailing List
    </a>
  </div>
</div>
<div class="lg:grid lg:grid-cols-2 gap-8">
  <div>
    <div class="content secondary" id="baby-ghosts">
      <h2>Current Projects</h2>
      <h3 class="mt-0">Peer Accelerator</h3>
      <div class="flex flex-wrap items-center my-6 justify-around">
        <div class=" mx-auto text-center flex justify-center">
          {@html wgLogo}
        </div>
        <div class="text-6xl  flex justify-center">
          ×
        </div>
        <div class=" mx-auto text-center flex justify-center">
          {@html burstLogo}
        </div>
      </div>
    </div>
    <SvelteMarkdown source={BGAbout} />
    <h3 class="pt-12">Community Publishing</h3>
    <SvelteMarkdown source={PubAbout} />
  </div>
  <div>
    <h3>About Weird Ghosts</h3>
    <SvelteMarkdown source={WGAbout} />
  </div>
</div>