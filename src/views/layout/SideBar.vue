<template>
	<div>
		<div class="sider-logo">
			<AutoComplete :option="option" @change="siderChange" placeholder="搜索..."></AutoComplete>
		</div>
		<Menu style="margin-top: 20px;" :datas="menuData" :inlineCollapsed="collapsed" @select="triggerSelect" accordion></Menu>
	</div>
</template>

<script>
export default {
	data() {
		var bingo = {
			option: {
				keyName: 'key', titleName: 'title', delay: 300, minWord: 1,
				loadData:(filter, callback) => {
					var arr = []
					this.siderData.forEach(item => {
						if(item.words.includes(filter)) arr.push(item);
					})
					callback( arr );
				}
			},
			menuData: [
				{ title: '首页', key: 'home', icon: 'h-icon-home' },
				{ title: '查询', key: 'search', icon: 'h-icon-search' },
				{ title: '收藏', key: 'bookmark', icon: 'h-icon-star', count: 1},
				{ title: '任务', icon: 'h-icon-task', key: 'task', children: [
					{ title: '插槽', key: 'v-slot' },
					{ title: '样式', key: 'pattern' }
				] }
			],
			siderData: ''
		};
		
		function parseData(data){
			var arr = [];
			for (let i = 0; i < data.length; i++) {
				let obj = data[i];
				if(obj.children) arr = arr.concat(parseData(obj.children));
				else {
					let {title, key} = obj;
					arr.push({title, key, words: key+title});
				}
			}
			return arr;
		}
		
		bingo.siderData = parseData(bingo.menuData);
		
		
		return bingo;
	},
	props: ['collapsed'],
	methods: {
		triggerSelect({key}){
			this.$router.push({name: key});
		},
		siderChange({key}){
			if(key) this.$router.push({name: key});
		}
	}
}
</script>

<style scoped>
.SideBar {}
.sider-logo {background: rgba(255, 255, 255, 0.2);margin: 16px 24px;height: 30px;}
/deep/ .h-autocomplete-show{border: none;box-shadow: none;background: none;}
/deep/ .h-autocomplete-input {background: none;color: #FFF;}
</style>
