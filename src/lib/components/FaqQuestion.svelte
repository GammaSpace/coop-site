<script lang="ts">
  export let depth:number;
  export let raw:string;
</script>

<div class="faq-q">
  {#if depth === 1}
    <h1><slot></slot></h1>
  {:else if depth === 2}
    <h2><slot></slot></h2>
  {:else if depth === 3}
    <h3><slot></slot></h3>
  {:else if depth === 4}
    <h4><slot></slot></h4>
  {:else if depth === 5}
    <h5><slot></slot></h5>
  {:else if depth === 6}
    <h6><slot></slot></h6>
  {:else}
    {raw}
  {/if}
</div>