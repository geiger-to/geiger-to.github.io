<script lang="ts">
  import { Page } from '$lib';
  import Time from 'svelte-time';

  export let data;
</script>

<Page bgColor={data.page.color}>
  <div class="prose">
    <h1 class="mb-2">{data.page.title}</h1>
    {#if data.page.desc}
      <h2 class="mb-2 mt-0 text-lg font-normal italic">{data.page.desc}</h2>
    {/if}
    <h3 class="mb-8 mt-0 text-sm font-normal italic opacity-75">
      <span class="font-bold">{data.page.author}</span> published <Time
        relative
        timestamp={data.page.date}
      />
    </h3>
    <svelte:component this={data.page.markdown} />
  </div></Page
>
