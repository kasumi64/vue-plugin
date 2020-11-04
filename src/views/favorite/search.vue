<template>
	<div class="search">
		<input v-model="keyword" type="text" @input="input(keyword)">
		<button @click="search(keyword)" class="blueBtn">点击</button>
	</div>
</template>

<script>
import * as http from '@/api/api.js'
import utils from '@utils'

export default {
	name: 'search',
	data() {
		return {
			keyword: 'op'
		}
	},
	methods: {
		search(keyword){
			http.getGoods().next(res=>{
				console.log('res',res);
			})
		},
		input(keyword) {
			http.getBaiduInputTips(keyword).next(res=>{
				console.log('res',res);
			});
		}
	}
}
</script>

<style scoped lang="scss">
.search {
	
}
.blueBtn{margin-left: 10px;}
</style>
