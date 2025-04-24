<script lang="ts">
  import { masonry } from './masonry';
</script>

<section use:masonry={$$props} class="masonry">
  <slot />
</section>
