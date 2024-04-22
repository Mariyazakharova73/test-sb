<script lang="ts">
  import Converter from './lib/Converter.svelte';
  const endpoint = "https://open.er-api.com/v6/latest/USD";


  async function getData() {
    const res = await fetch(endpoint);
    const data = await res.json();

    return data;
  }

  let currencyDataPromise = getData()
  console.log(currencyDataPromise, 'currencyData')
</script>



<main>
  <div class="wrapper">
    {#await currencyDataPromise}
    <p>...Loading</p>
    {:then res}
    <Converter data={res}/>
    {:catch error}
    <p style="color: red">{error.message}</p>
    {/await}
  </div>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
