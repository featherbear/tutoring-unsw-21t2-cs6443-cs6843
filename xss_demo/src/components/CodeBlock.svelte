<script lang="ts">
  export let id: string = "";
  export let data: string = "";
  import { html as beautify } from "js-beautify";

  export let pretty: boolean = true;

  let display: string;
  $: display = pretty ? beautify(data) : data;
</script>

<div>
  <b>Code View</b>
  <code {id}>
    {display}
  </code>
</div>

<style lang="scss">
  div {
    margin: 5px 0;

    code {
      display: block;
      margin-top: 5px;
      white-space: pre;
      &:empty::before {
        content: "No HTML content inside element";
      }
      border-left: 2px solid black;
      border-radius: 2px;
    }
  }
</style>
