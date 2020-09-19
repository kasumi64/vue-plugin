<template>
	<div class="pattern">
		<div class="wrap box-shadow">
			<p class="ellipsis"> 对象作为伸缩盒子模型显示,设置或检索伸缩盒对象的子元素的排列方式显示的行数,隐藏超出的内容 </p>
		</div>
	</div>
</template>

<script>
// import * as http from '@/api/api.js'

export default {
	name: 'episodes',
	data() {
		return {
			
		}
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
.wrap{padding: 10px;display: inline-block;width: 200px;}
.ellipsis{
	word-break: break-all;
	white-space: normal; /* 文本强制换行 */
	overflow:hidden; /** 隐藏超出的内容 **/
	text-overflow:ellipsis; /* 文本溢出显示省略号 */
	
	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
	-webkit-line-clamp: 3; /** 显示的行数 **/
} 
</style>
