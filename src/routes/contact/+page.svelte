<script lang="ts">
  import { FileText, Github, Linkedin, Mail } from "lucide-svelte";

  import { Hubspot } from "$lib";
  import { Page } from "$lib";

  let messaging = false;

  const toggleMessaging = () => {
    messaging = !messaging;
  };
</script>

<Page title="get in touch" bg={import('../../../src/assets/pom.webp')}>
  <h1 class="text-4xl font-bold mb-4">contact me</h1>

  <div class="flex gap-4">
    <div class="flex-1">
      <p class="md:text-xl mb-4">
        👋 I'm a developer and designer based in Toronto.
      </p>

      <p class="text-sm md:text-base mb-4">
        <span class="hidden md:inline"
          >I love working on difficult problems requiring creative solutions,
          especially at scale. I'm available for full-time and contract work.</span
        >
        Feel free to message me here or elsewhere on the internet.
      </p>

      <button
        on:click|stopPropagation|preventDefault={toggleMessaging}
        class={`whitespace-nowrap btn btn-sm ${messaging ? "btn-neutral" : "btn-primary"}`}
      >
        {#if messaging}
          cancel
        {:else}
          send a message
        {/if}
      </button>
    </div>

    <div class="">
      <div class="flex items-center gap-4 mb-4">
        <div>
          <Mail size="18" />
        </div>

        <a href="mailto:jon@geiger.to" class="btn btn-sm">
          <span>jon@geiger.to</span>
        </a>
      </div>

      <div class="flex items-center gap-4 mb-4">
        <div>
          <Github size="18" />
        </div>

        <a href="https://github.com/geiger-to" class="btn btn-sm">
          <span>@geiger-to</span>
        </a>
      </div>

      <div class="flex items-center gap-4 mb-4">
        <div>
          <Linkedin size="18" />
        </div>

        <a href="https://linkedin.com/in/geiger-to" class="btn btn-sm">
          <span>geiger-to</span>
        </a>
      </div>

      <div class="flex items-center gap-4 mb-4">
        <div>
          <FileText size="18" />
        </div>

        <a href="/resume" class="btn btn-sm">
          <span>résumé</span>
        </a>
      </div>
    </div>
  </div>

  {#if messaging}
    <hr class="my-4" />

    <div class="mb-4">
      <Hubspot
        portalId="341712448"
        formId="5ce3f550-aa44-43cd-9537-cf12701aff2a"
      />
    </div>
  {/if}
</Page>
