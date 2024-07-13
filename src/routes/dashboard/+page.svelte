<script lang="ts">
  import { user } from "$lib/stores/authStore";
  import { onMount } from "svelte";

  $: if (!$user) {
    // Redirect to login if user is not authenticated
    onMount(() => {
      window.location.href = "/login";
    });
  }
</script>

{#if $user}
  <h1>Welcome to the Dashboard</h1>
  <p>You are logged in as {$user.email}</p>
{/if}
