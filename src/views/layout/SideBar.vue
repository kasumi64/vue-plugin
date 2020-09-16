<template>
	<div>
		<div class="sider-logo"></div>
		<Menu style="margin-top: 20px;" :datas="menuData" :inlineCollapsed="collapsed" @select="triggerSelect" accordion></Menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			siderCollapsed: false,
			menuData: [
				{ title: '首页', key: 'home', icon: 'h-icon-home' },
				{ title: '查询', key: 'search', icon: 'h-icon-search' },
				{ title: '收藏', key: 'bookmark', icon: 'h-icon-star', count: 1},
				{ title: '任务', icon: 'h-icon-task', key: 'task', children: [
					{ title: '插槽', key: 'v-slot' },
					{ title: '插槽', key: 'ellipsis' }
				] }
			]
		}
	},
	props: ['collapsed'],
	methods: {
		triggerSelect({key}){
			this.$router.push({name: key});
		}
	}
}
</script>

<style scoped>
.SideBar {}
.sider-logo {height: 34px;background: rgba(255, 255, 255, 0.2);margin: 16px 24px;}
</style>
