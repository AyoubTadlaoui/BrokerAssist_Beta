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

<main>
  {#if $user}
    <h1>Welcome to the Dashboard</h1>
    <p class="user-info">You are logged in as {$user.email}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<style>
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .user-info {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
</style>
