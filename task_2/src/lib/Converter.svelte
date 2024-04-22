<script lang="ts">
  export let data:any;

  let startValue:number  = 0;
  let endValue: number = 0;

  let startCurrency:string;
  let endCurrency:string = 'RUB';

  console.log(data, 'conv')

  let rates = data.rates
  console.log(rates)

  const onChangeStartValue = () => {
    console.log('ch1', startValue)
    const price = startValue / rates[startCurrency];
    const result = price * rates[endCurrency]
    endValue = result;
  }

  const onChangeEndValue = () => {
    console.log('ch2', endValue)
    const result = (rates[startCurrency] / rates[endCurrency]) * endValue;
    startValue = result
  }

  const onChangeStartCurrency = () => {
    onChangeStartValue()
  }

  const onChangeEndCurrency = () => {
    onChangeStartValue()
  }

</script>


<form>
  <div>
    <input class='input' bind:value={startValue} 
    on:change={onChangeStartValue}/>
    <select
        class='select'
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
    <input class='input' bind:value={endValue} 
    on:change={onChangeEndValue}
    />
    <select
        class='select'
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



<style>
.input {
  width: 300px;
  height: 50px;
}

.select {
  width: 70px;
  height: 50px;
}
</style>
