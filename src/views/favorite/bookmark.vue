<template>
	<div class="bookmark">
		<Search v-model="word" @search="search('clear')" v-width="360" position="front" showSearchButton placeholder="输入关键字"></Search>
		<div class="overflow">
			<ul class="linkList">
				<li v-for="(obj, k) in list" :key="k">
					<div class="hover-shadow box" :title="obj.name">
						<div class="box-shadow pox">
							<a class="link" :href="obj.href" target="_blank">
								<img class="icon" :src="obj.icon" />
								<span> {{obj.name}} </span>
							</a>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<hr class="hr" />
		<Pagination v-model="pagination" @change="currentChange" :sizes="[20,30,60,100]" align="right" layout="sizes,pager,jumper,total" small></Pagination>
	</div>
</template>

<script>
import { getFavorites } from '@api'


export default {
	name: 'bookmark',
	data() {
		return {
			word: '',
			list: [],
			pagination: {
				cur: 1, page: 1, size: 20, total: 0
			}
		}
	},
	methods: {
		search(type){
			if(type) this.pagination.page = this.pagination.cur = 1;
			let param = Object.assign({}, this.pagination);
			param.keyword = this.word;
			getFavorites(param).next(res => {
				this.list = res.data;
				this.pagination.total = res.total;
			});
		},
		currentChange(page){
			// console.log(page);
			this.pagination = page;
			this.search();
		}
	},
	created() {
		this.search();
	}
};

</script>

<style scoped lang="scss">
.bookmark {height: 100%;}
.overflow{max-height: calc(100% - 70px);margin-top: 10px;overflow: overlay;}
.linkList{
	display: flex;flex-wrap: wrap;
	li{flex: none;flex-basis: 230px;padding: 0 10px;}
	.box{padding: 10px 0;}
	.pox{padding: 10px;height: 68px;}
	.icon{width: 16px;height: 16px;vertical-align: top;}
	.link{
		word-break: break-all;white-space: normal;overflow:hidden;text-overflow:ellipsis;
		display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;
		span{line-height: 16px;vertical-align: top;margin-left: 5px;}
	}
	::v-deep .link:hover{color: #409eff !important;text-decoration: underline;}
}
.hr{border-width: 0.5px;border-color: #DDD;margin: 10px 0;}
</style>
