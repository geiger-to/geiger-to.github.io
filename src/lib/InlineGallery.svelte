<script lang="ts">
  import type { BiggerPictureInstance } from 'bigger-picture';
  import { masonry } from './masonry';
  import { onMount } from 'svelte';

  // import style
  import { loadBp } from './load-bp';

  // image data
  export let items = [];

  // initializes in onMount so it runs only in browser
  let bp: BiggerPictureInstance;

  /** click handler */
  function openBiggerPicture(e: Event) {
    e.preventDefault();
    const target = e.currentTarget as HTMLAnchorElement;
    bp.open({
      items: target.parentElement.children,
      el: target
    });
  }

  onMount(async () => {
    // use onMount to define variable so it runs only in the browser
    bp = await loadBp();
  });
</script>

<section use:masonry class="gallery">
  {#each items as item}
    <a
      on:click={openBiggerPicture}
      href={item.img.split(' ')[0]}
      data-img={item.img}
      data-thumb={item.thumb}
      data-alt={item.alt}
      data-width={item.width}
      data-height={item.height}
    >
      <img src={item.thumb} alt={item.alt} />
    </a>
  {/each}
</section>

<style>
  img {
    max-width: 100%;
    vertical-align: top;
    border-radius: 4px;
  }
</style>
