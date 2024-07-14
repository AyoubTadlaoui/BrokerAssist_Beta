<script lang="ts">
  import { user } from "$lib/stores/authStore";
</script>

<main>
  <nav>
    <a href="/">Home</a>
    {#if $user}
      <a href="/dashboard">Dashboard</a>
      <a href="/logout">Logout</a>
    {:else}
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    {/if}
  </nav>
  <slot />
</main>

<style>
  nav {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  nav a {
    text-decoration: none;
    color: #333;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }

  nav a:hover {
    background-color: #ddd;
  }

  main {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
</style>
