<script>
  import BugHeader from "../../components/BugHeader.svelte";
  import Result from "./Result.svelte";

  let query;
  let preview;
  import { onMount } from "svelte";
  import CodeBlock from "../../components/CodeBlock.svelte";
  onMount(() => {
    query = new URLSearchParams(window.location.search).get("q") || "";

    if (query) {
      fetch("/reflected/asSSR" + window.location.search)
        .then((r) => r.json())
        .then((j) => {
          preview = j.html
            .replace("<!-- HTML_TAG_START -->", "")
            .replace("<!-- HTML_TAG_END -->", "");
        });
    }
  });
</script>

<BugHeader />

<Result {query} />

<hr />

<form>
  <input name="q" placeholder="Search for something here" />
  <button type="submit">Search!</button>
</form>

<hr />

{#if query}
  <CodeBlock data={preview} />
{/if}

<style lang="scss">
  input[name="q"] {
    padding: 5px;
    border-radius: 5px;
    width: 300px;
  }
  button[type="submit"] {
    padding: 5px;
    border-radius: 5px;

    &:hover {
      filter: brightness(0.9);
    }
  }
</style>
