<script>
  import Highlight from 'svelte-highlight';
  import styles from 'svelte-highlight/styles/solarized-dark';

  /* eslint svelte/no-at-html-tags: "off" */
  export let lines = [];
</script>

<svelte:head>
  {@html styles}
</svelte:head>

<div class="code">
  <Highlight {...$$props} code={lines.join('\n')} />
</div>

<style>
  :global(.code pre) {
    padding: 0;
  }

  :global(.code pre code) {
    padding: 1.5em !important;
  }
</style>
