<script lang="ts">
  import { Page } from '$lib';
</script>

<Page title="welcome!" bg={import('../assets/pom.webp')}>
  <h1 class="text-4xl mb-2">
    <a href="mailto:jon@geiger.to" class="hover:underline focus:underline"> jon@geiger.to </a>
  </h1>

  <h2 class="text-2xl mb-4">🇨🇦 Toronto-based IT and creative person</h2>

  <p class="text-sm flex items-center gap-4 opacity-75 mb-4">
    <span>programmer</span>
    <span>designer</span>
    <span>photographer</span>
  </p>

  <div class="alert"></div>
</Page>

<style>
  h1 {
    font-weight: bold;
  }
</style>
