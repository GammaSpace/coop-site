<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { PlausibleAnalytics } from '@accuser/svelte-plausible-analytics';
</script>

<Header />
<div class="relative mt-24 md:mt-12 px-8 md:px-16 mx-auto max-w-screen-xl">
  <slot />
</div>
<PlausibleAnalytics />
<Footer />