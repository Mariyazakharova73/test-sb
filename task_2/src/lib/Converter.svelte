<script lang="ts">
	import type { Data } from '../types/types';
	import {
		DEFAULT_END_CURRENCY,
		DEFAULT_START_CURRENCY,
	} from '../utils/constants';

	export let data: Data;
	let rates = data.rates;

	let startCurrency: string = DEFAULT_START_CURRENCY;
	let endCurrency: string = DEFAULT_END_CURRENCY;

	let startValue: number = rates[startCurrency];
	let endValue: number = Number(rates[endCurrency].toFixed(4));

	const onChangeStartValue = () => {
		const price = startValue / rates[startCurrency];
		const result = price * rates[endCurrency];
		endValue = Number(result.toFixed(4));
	};

	const onChangeEndValue = () => {
		const result = (rates[startCurrency] / rates[endCurrency]) * endValue;
		startValue = Number(result.toFixed(4));
	};

	const onChangeStartCurrency = () => {
		onChangeStartValue();
	};

	const onChangeEndCurrency = () => {
		onChangeStartValue();
	};
</script>

<form class="form">
	<div>
		<input
			class="input"
			type="number"
			bind:value={startValue}
			on:keyup={onChangeStartValue}
		/>
		<select
			class="select"
			bind:value={startCurrency}
			on:change={onChangeStartCurrency}
		>
			{#each Object.keys(data?.rates) as item}
				<option value={item}>
					{item}
				</option>
			{/each}
		</select>
	</div>

	<div>
		<input
			class="input"
			type="number"
			bind:value={endValue}
			on:keyup={onChangeEndValue}
		/>
		<select
			class="select"
			bind:value={endCurrency}
			on:change={onChangeEndCurrency}
		>
			{#each Object.keys(data?.rates) as item}
				<option value={item}>
					{item}
				</option>
			{/each}
		</select>
	</div>
</form>
