<script context="module" lang="ts">
  import type { PageLoad } from "./$types";
  import { pb } from "$lib/stores/authStore";
</script>

<script lang="ts">
  export let data: { success: boolean; error?: any };

  if (data.success) {
    // Redirect to the dashboard
    window.location.href = "/dashboard";
  } else {
    console.error("Verification failed:", data.error);
  }
</script>

//v0.02
<main>
  {#if !data.success}
    <h1>Verification Failed</h1>
    <p>Verification failed. Please try again.</p>
  {:else}
    <p>Redirecting...</p>
  {/if}
</main>

//v0.02
