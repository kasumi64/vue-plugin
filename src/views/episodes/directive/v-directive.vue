<template>
	<div>
		<div class="wrap">
			<div class="red" v-drag>拖动</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'v-directive',
	directives: {
		
	} ,
	data (){
		return {
			
		}
	},
}
</script>

<style scoped>
.wrap{width: 4.9rem;height: 3.0rem;border: 1px solid silver;}
.red{color: #EEE;background: #F06292;text-align: center;width: 50px;height: 30px;line-height: 30px;}
</style>
