<template>
	<div class="bookmark">
		<Search v-model="word" @search="search" v-width="360" position="front" showSearchButton placeholder="输入关键字"></Search>
	</div>
</template>

<script>
import { getFavorites } from '@api'

var favorites;


export default {
	name: 'bookmark',
	data() {
		return {
			word: '',
			list: []
		}
	},
	methods: {
		search(keyword){
			keyword
		}
	},
	created() {
		getFavorites().next(res => {
			favorites = res;
			console.log(favorites);
		});
	}
};

</script>

<style scoped lang="scss">
.bookmark {
	
}
</style>
