<template>
	<Layout class="layout" siderFixed :siderCollapsed="siderCollapsed">
		<Sider theme="dark">
			<Sidebar :collapsed="siderCollapsed"></Sidebar>
		</Sider>
		<Layout headerFixed>
			<HHeader theme="white">
				<div style="width:100px;float:left;">
					<Button icon="h-icon-menu" size="l" noBorder style="font-size: 20px" @click="siderCollapsed=!siderCollapsed"></Button>
				</div>
			</HHeader>
			
			<Content>
				<Breadcrumb :datas="datas" style="margin: 16px 0px;"></Breadcrumb>
				<div class="main">
					<router-view></router-view>
				</div>
			</Content>
			
			<HFooter class="text-center">Copyright © 2020.9—{{year}}
				<a href="http://kasumi64.gitee.io/web/" target="_blank">Kasumi</a>
				<!-- https://gitee.com/kasumi64/web/pages -->
			</HFooter>
		</Layout>
	</Layout>
</template>

<script>
export default {
	data() {
		let day = new Date;
		let year = `${day.getFullYear()}\.${day.getMonth()+1}`
		return {
			siderCollapsed: false,
			datas: [
				{ icon: 'h-icon-home' },
				{ title: 'Component', icon: 'h-icon-complete', route: { name: 'Component' } },
				{ title: 'Breadcrumb', icon: 'h-icon-star' }
			],
			year
		}
	},
	created() {
		this.$router.push('/home');
	},
	components: {
		Sidebar: resolve => require(['./SideBar.vue'], resolve),
	}
}
</script>

<style scoped lang="scss">
.layout {height: 100%;}
.h-layout {background: #F0F2F5;}
.h-layout-content{padding: 0px 30px;height: 100%;}
.main{height: calc(100% - 54px);background: rgb(255, 255, 255); padding: 20px;overflow: auto;}
.h-layout-footer {padding: 20px 50px;color: rgba(0, 0, 0, 0.65);font-size: 14px;}
</style>
