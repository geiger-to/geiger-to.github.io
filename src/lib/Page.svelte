<script>
  import Layout from "./Layout.svelte";
</script>

<Layout name="geiger.to" {...$$props}>
  <div class="flex-none" slot="nav">
    <ul class="menu menu-xs menu-horizontal p-0">
      <li><a href="../contact/">contact</a></li>
    </ul>
  </div>

  <slot />

  <div
    data-theme="dark"
    class={["p-4 w-full", $$props.bg || $$props.bgColor ? "bottom-1" : ""].join(
      " ",
    )}
    slot="footer"
  >
    <div
      class="max-w-[500px] text-xs alert flex items-center gap-2 justify-center rounded whitespace-nowrap opacity-50 py-2 mx-auto text-white"
    >
      <p class="flex items-center gap-1 print:hidden">
        <a property="dct:title" rel="cc:attributionURL" href="https://geiger.to"
          >geiger.to</a
        >
        by
        <a
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          class="link"
          href="mailto:jon@geiger.to">jon@geiger.to</a
        >
        is licensed
        <a
          class="flex items-center gap-1"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          >CC BY-NC-SA 4.0<img
            class="hidden md:inline"
            style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt=""
          /><img
            class="hidden md:inline"
            style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt=""
          /><img
            class="hidden md:inline"
            style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
            alt=""
          /><img
            class="hidden md:inline"
            style="height:22px!important;margin-left:3px;vertical-align:text-bottom;"
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
            alt=""
          /></a
        >
      </p>
    </div>
  </div>
</Layout>
