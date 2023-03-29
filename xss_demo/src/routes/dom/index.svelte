<script>
  let specifiers = ["innerHTML", "innerText", "textContent"];
  import CodeBlock from "../../components/CodeBlock.svelte";
  import { html as beautify } from "js-beautify";
  import BugHeader from "../../components/BugHeader.svelte";
</script>

<div>
  <BugHeader />

  {#each specifiers as specifier}
    <form
      entry
      type={specifier}
      on:submit|preventDefault={() => {
        document.getElementById(`elem_${specifier}`)[specifier] +=
          document.getElementById(`input_${specifier}`).value;
        document.getElementById(`input_${specifier}`).value = "";
        document.getElementById(`code_${specifier}`).innerText = beautify(
          document.getElementById(`elem_${specifier}`).innerHTML
        );
      }}
    >
      <label for="input_{specifier}">&lt;element&gt;.{specifier}</label>
      <input id="input_{specifier}" type="text" placeholder="Enter content" />
      <button type="Submit">Add</button>
      <div id="elem_{specifier}" />
      <CodeBlock id="code_{specifier}" />
    </form>
    <hr />
  {/each}
</div>

<style lang="scss">
  form[entry] {
    label {
      display: block;
    }

    &[type="innerHTML"] label {
      color: rgb(243, 130, 130);
      &::after {
        content: " (vulnerable)";
      }
    }

    padding: 5px;
    margin-bottom: 5px;

    transition: background-color 0.3s;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
</style>
