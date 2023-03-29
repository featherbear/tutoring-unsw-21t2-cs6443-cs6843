<script>
  export let query = null;
</script>

{#if query}
  <div>
    {@html "No results found for " + decodeURIComponent(query) + ". Try again!"}
  </div>
{:else}
  <div class="error">Enter something to search for...</div>
{/if}
