<script lang="ts">
	import Converter from './lib/Converter.svelte';
	import { ENDPOINT } from './utils/constants';

	async function getData() {
		const res = await fetch(ENDPOINT);
		const data = await res.json();

		return data;
	}

	let currencyDataPromise = getData();
</script>

<main>
	<section class="wrapper">
		{#await currencyDataPromise}
			<p>...Loading</p>
		{:then res}
			<Converter data={res} />
		{:catch error}
			<p class="error">{error.message}</p>
		{/await}
	</section>
</main>
