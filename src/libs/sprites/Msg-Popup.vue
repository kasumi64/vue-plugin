<template>
	<div class="mask" ref="popup" tabindex="0">
		<div class="msgBox">
			<header>
				header
				<!-- <slot name="header"></slot> -->
				<b @click="close" class='close'>x</b>
			</header>
			<div class="msgBody">
				<slot></slot>
				<div v-html="msg"></div>
			</div>
			<footer>
				<button @click="close" class="normalBtn">取 消</button>
				<button @click="yes" class="blueBtn">确 定</button>
				<slot name="footer"></slot>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Message-Popup',
	data(){
		return {};
	},
	props:{
		msg: [String]
	},
	methods: {
		keydown(e){
			if (e.keyCode === 27) { // esc关闭消息
				this.close();
			} else if(e.keyCode === 13) {
					this.yes();
			}
		},
		close(){
			let el = this.$refs.popup;
			let parent = el.parentNode;
			if(parent) parent.removeChild(el);
			document.removeEventListener('keydown', this.keydown);
		},
		yes(){
			this.close();
		}
	},
	mounted() {
		document.addEventListener('keydown', this.keydown);
		this.$nextTick(() => this.$refs.popup.focus())
	},
	beforeDestroy() {
		document.removeEventListener('keydown', this.keydown);
	}
}
</script>

<style scoped lang="scss">
.msgBox{position: absolute;width: 600px;margin: auto;background: #FFF;left: 0;right: 0;top: 40%;transform: translateY(-50%);border-radius: 6px;}
header{
	position: relative;padding: 13px 20px;font-size: 20px;line-height: 24px;border-bottom: 1px solid #DDD;font-weight: 700;color: #444;
	.close{position: absolute;top: 13px;right: 20px;font-size: 20px;font-weight: normal;cursor: pointer;color: #999;}
}
.msgBody{
	padding: 20px;min-height: 200px;max-height: 400px;font-size: 14px;line-height: 18px;overflow: auto;
	display: flex;justify-content: center;align-items: center;color: #606266;
}
footer{
	padding: 13px 20px;border-top: 1px solid #DDD;text-align: right;
}
</style>
