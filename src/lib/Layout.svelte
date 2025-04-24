<script>
  import '../app.css';

  export let name;
  export let bg = null;
  export let bgColor = null;
  export let title = null;
  export let dark = false;

  let imageStyle = `background: ${bgColor}`;

  bg?.then((src) => {
    imageStyle = `background-image: url(${src.default})`;
  });
</script>

<svelte:head>
  <title>{[title, name].filter(Boolean).join(' | ')}</title>
</svelte:head>

<div class={`h-full`}>
  {#if $$slots.nav}
    <div
      class="navbar p-0 bg-black min-h-0 h-[36px] px-1 border-b border-dotted print:hidden"
      data-theme="dark"
    >
      <div class="flex-1">
        <a href="/" class="btn btn-xs font-bold btn-ghost text-xs">{name}</a>
      </div>

      <slot name="nav" />
    </div>
  {/if}

  <div data-theme={dark ? 'dark' : 'light'} class="h-full">
    {#if bg || bgColor}
      <div
        class={`md:p-10 w-full ${bg ? 'bg-cover bg-center min-h-screen' : ''}`}
        style={imageStyle}
        data-theme={dark ? 'dark' : 'light'}
      >
        <div
          class="md:max-w-3xl z-10 md:w-auto w-full p-8 md:p-10 shadow-2xl bg-base-100 dark:bg-base-300 md:rounded print:shadow-none print:p-4"
        >
          <div id="page">
            <slot />
          </div>
        </div>
      </div>
    {:else}
      <slot />
    {/if}

    <slot name="footer" />
  </div>
</div>
