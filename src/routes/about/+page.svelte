<script>
  import SvelteMarkdown from "svelte-markdown";
  import AboutImpact from "$lib/content/about/AboutImpact.md?raw";
  import AboutResultsFlow from "$lib/content/about/AboutResultsFlow.md?raw";
</script>

<div class="max-w-[800px]">
  <div>
    <div class="intro">
      <SvelteMarkdown source={AboutImpact} />
    </div>
  </div>
</div>
<div class="lg:grid lg:grid-cols-2 gap-8">
  <div>
    <h3 class="pb-4">Results Flow Summary</h3>
    <SvelteMarkdown source={AboutResultsFlow} />
  </div>
</div>
<div class="my-4 px-4 rounded-md border-2 border-black h-[300px]">
  <p>Results Flow Diagram?</p>
</div>
<div class="lg:grid lg:grid-cols-2 gap-8">
  <div>
    <h3 class="pb-4">Brief History</h3>
    <SvelteMarkdown source={AboutResultsFlow} />
  </div>
</div>
<h3 class="pt-8">Recent Accomplishments</h3>
<div class="lg:grid lg:grid-cols-2 pt-4 gap-8">
  <div class="activity-box">
    <h4>HSPP</h4>
    <div class="h-[200px] bg-purple-200"></div>
    <p>Based on our community's collectively developed mentorship program, investors Weird Ghosts and Gamma Space have partnered to create a six-month program in support of emerging underrepresented founders and studios. Participants identify and solve studio development pain points by addressing the challenges of the "three Ps": Product, Production, and Pitching.</p>
  </div>
  <div class="activity-box">
    <h4>PEER ACCELERATOR</h4>
    <div class="h-[200px] bg-purple-200"></div>
    <p>Based on our community's collectively developed mentorship program, investors Weird Ghosts and Gamma Space have partnered to create a six-month program in support of emerging underrepresented founders and studios. Participants identify and solve studio development pain points by addressing the challenges of the "three Ps": Product, Production, and Pitching.</p>
  </div>
</div>
