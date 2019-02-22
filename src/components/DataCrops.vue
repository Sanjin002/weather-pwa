<template>
	<div id="datacrops">
		<Crops v-bind:crops="crops" />
	</div>
</template>

<script>
import Crops from '@/components/Crops'
export default{
	name: 'datacrops'
	components: {
		Crops
	},
	
}
</script>
<style>
	
</style>