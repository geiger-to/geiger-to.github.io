<script lang="ts">
  import { onMount } from 'svelte';

  export let portalId: string,
    formId: number | string,
    submitText = 'Submit',
    region = 'na1';

  const targetElementID = `form-${formId}`;

  const handleCreateForm = () => {
    //@ts-expect-error Hubspot global
    if (window.hbspt) {
      //@ts-expect-error Missing Hubspot types
      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        submitText,
        target: '#' + targetElementID,
        css: '' //undocumented but required for iframe styling
      });
    }
  };

  onMount(handleCreateForm);
</script>

<svelte:head>
  <script src="//js.hsforms.net/forms/embed/v2.js" on:load={handleCreateForm}></script>
</svelte:head>

<div id={targetElementID} class="base-hubspot-form" />
