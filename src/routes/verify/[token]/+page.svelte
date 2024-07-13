<script context="module" lang="ts">
  import type { PageLoad } from "./$types";
  import { pb } from "$lib/stores/authStore";

  export const load: PageLoad = async ({ params }) => {
    const token: string = params.token;

    try {
      await pb.collection("users").confirmVerification(token);
      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  };
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

{#if !data.success}
  <p>Verification failed. Please try again.</p>
{/if}
