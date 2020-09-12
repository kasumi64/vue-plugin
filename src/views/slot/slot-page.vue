<template>
	<div class="slot" id="slot-page">
		<button @click="test" class="blueBtn">测 试</button>
		<Many :todo="todo">
			<div slot="header">头部</div>
			
			<template v-slot:default="scope">
				<div> {{scope.child[0]}} v-slot:default具名插槽，child是slot-scope的数据</div>
			</template>
			
			<!-- <div slot-scope="scope">ABC{{scope.child}}</div> -->
			
			<template #footer><div >脚部</div></template>
		</Many>
	</div>
</template>

<script>
import utils from '@/libs/utils.js';
import sprite from '@/libs/sprites/MovieClip.js';

export default {
	data(){
		return {
			todo: [{a:11, b:22}, {a:33, b:44}]
		};
	},
	methods:{
		test(){
			let opt = {
				msg: '<p>连接速度</p>'
			};
			utils;
			sprite.message(opt)
		}
	},
	mounted() {
		
	},
	components: {
		Many: () => import('./manySlot.vue')
	}
}
</script>

<style scoped lang="scss">
.slot{padding: 20px;}
</style>
