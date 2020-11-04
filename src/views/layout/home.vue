<template>
	<div class="home">
		<ul class="menuList">
			<li v-for="page in menuList" :key="page.key">
				<div class="box-shadow item" @click="jump(page.key)">
					<h3>{{page.title}}</h3>
					<p class="link"><i :class="page.icon"></i> 跳转</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'home',
	data() {
		return {
			menuList: [
				{ title: '查询', key: 'search', icon: 'h-icon-search' },
				{ title: '收藏', key: 'bookmark', icon: 'h-icon-star' },
				{ title: '插槽', key: 'v-slot', icon: 'h-icon-task' },
				{ title: '指令', key: 'v-directive', icon: 'h-icon-task' },
				{ title: '样式', key: 'pattern', icon: 'h-icon-complete' }
			]
		}
	},
	methods: {
		jump(name){
			this.$router.push({name});
		}
	}
}
</script>

<style scoped lang="scss">
.home {}
.menuList{
	display: flex;flex-wrap: wrap;
	li{text-align: center;flex: none;flex-basis: 186px;padding: 0.1rem;}
	h3{font-size: 0.16rem;}
	.item{padding: 10px 0;border-radius: 4px;border: 1px solid #D0E5FF;}
	.link{margin-top: 0.2rem;font-size: 0.14rem;}
}
@media screen and (max-device-width: 504px){
	.menuList{
		li{flex-basis: 50%;}
	}
}
</style>