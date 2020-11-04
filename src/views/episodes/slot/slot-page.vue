<template>
	<div class="slot" id="slot-page">
		<div class="firstRow">
			<Many :todo="todo">
				<div slot="header">外部插入的标题</div>
				
				<template v-slot:default="scope">
					<p style="margin-bottom: 10px;">外部插入的默认的内容：</p>
					<div> {{scope.child[0]}} v-slot:default具名插槽，child是slot-scope的数据</div>
				</template>

				<!-- <div slot-scope="scope">ABC{{scope.child}}</div> -->
				<div slot="footer">外部插入的footer</div>
			</Many>
			<div ref="pageData" class="pageData"></div>
		</div>
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
		showPageData(this.$refs.pageData);
	},
	components: {
		Many: () => import('./manySlot.vue')
	}
}

function showPageData(el){
	var str = `
		<p>outer: ${window.outerWidth} x ${window.outerHeight}</p>
		<p>window.inner: ${window.innerWidth} x ${window.innerHeight}</p>
		<p>html.inner: ${document.documentElement.clientWidth} x ${document.documentElement.clientHeight}</p>
		<p>屏幕大小: ${screen.width} x ${screen.height}</p>
		<p>可用屏幕: ${screen.availWidth} x ${screen.availHeight}</p>
		<p>距离主屏幕的距离: </p><p>${screen.availLeft} x ${screen.availTop}</p>
	`;
	var txt = document.createElement('div');
	txt.innerHTML = str;
	el.innerHTML = txt.innerHTML;
}
		
</script>

<style scoped lang="scss">
.slot{}
.firstRow{
	&>div{display: inline-block;vertical-align: middle;}
}
.pageData{
	margin: 20px;font-size: 0.3rem;
	::v-deep p{line-height: 1.2;}
}
</style>
