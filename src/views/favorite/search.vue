<template>
	<div class="search">
		<input v-model="input" type="text">
		<button @click="click" class="blueBtn">点击</button>
	</div>
</template>

<script>
import * as http from '@/api/api.js'

export default {
	name: 'search',
	data() {
		return {
			input: ''
		}
	},
	methods: {
		click() {
			// console.log(888);
			// http.testPost().then(res=>{
			// 	console.log('res',res);
			// }).catch(e=>{
			// 	console.log('catch', e);
			// })
		}
	}
}
</script>

<style scoped lang="scss">
.search {
	
}
.blueBtn{margin-left: 10px;}
</style>
