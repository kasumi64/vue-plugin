<template>
	<div class="slot" id="slot-page">
		<button @click="test" class="blueBtn">测 试</button>
		<Many :todo="todo">
			<div slot="header">头部</div>
			
			<template v-slot:default="scope">
				<div> {{scope.child[0]}} v-slot:default具名插槽，child是slot-scope的数据</div>
			</template>

			<!-- <div slot-scope="scope">ABC{{scope.child}}</div> -->
		</Many>
		<Radio v-model="value">选择1</Radio>
	</div>
</template>

<script>
import sprite from '@sprite';


export default {
	name: 'v-slot',
	data(){
		return {
			value: true,
			todo: [{a:11, b:22}, {a:33, b:44}]
		};
	},
	methods:{
		test(){
			let opt = {
				msg: '<p>连接速度</p>'
			};
			sprite.message(opt);
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
