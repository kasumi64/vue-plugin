<template>
	<div class="test">
		<h1>TEST</h1>
		<input v-model="input" type="text">
		<button @click="click">点击</button>
		<div class="comment_inner">
			对象作为伸缩盒子模型显示,设置或检索伸缩盒对象的子元素的排列方式
			显示的行数,隐藏超出的内容
		</div>
	</div>
</template>

<script>
import * as http from '@/api/api.js'

export default {
	data() {
		return {
			input: ''
		}
	},
	methods: {
		click() {
			console.log(888);
			http.testPost().then(res=>{
				console.log('res',res);
			}).catch(e=>{
				console.log('catch', e);
			})
		}
	}
}
</script>

<style scoped lang="scss">
.test{padding: 20px;}
h1{text-align: center;font-size: 40px;}
input{margin-right: 20px;}
.comment_inner{
	width: 200px;
	word-break: break-all;
	white-space: nowrap; /* 文本强制不换行 */
	overflow:hidden; /** 隐藏超出的内容 **/
	text-overflow:ellipsis; /* 文本溢出显示省略号 */
	
	display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
	-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
	-webkit-line-clamp: 3; /** 显示的行数 **/
} 
</style>
