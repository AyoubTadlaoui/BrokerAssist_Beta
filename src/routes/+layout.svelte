<script lang="ts">
  import { user } from "$lib/stores/authStore";
</script>

<main>
  <nav>
    <a href="/">Home</a>
    {#if $user}
      <a href="/dashboard">Dashboard</a>
      <a href="/logout">Logout</a>
    {/if}
    {#if !$user}
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    {/if}
  </nav>
  <slot />
</main>

<style>
  nav {
    display: flex;
    gap: 10px;
  }
</style>
