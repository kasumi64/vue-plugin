import Vue from 'vue';

Vue.directive('drag', {
	bind(el, {value}){ //render挂载前
		console.log('bind', el.parentNode);
	},
	inserted(el, {value}){ //render挂载后
		console.log('inserted', el.parentNode);
	},
	updata(el, {oldvalue, value}){ //组件更新前的状态
		console.log('updata');
	},
	componentUpdated(el, {oldvalue, value}){ //组件更新后的状态
		console.log('componentUpdated');
	}
});
