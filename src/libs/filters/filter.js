import Vue from 'vue'
import dayjs from '@package/dayjs.min.js'

//时间转换
Vue.filter('convertTime', (timestamp, format="YYYY-MM-DD HH:mm:ss") => {
	//dayjs(time).format('YYYY-MM-DD dddd HH:mm:ss.SSS A');
	let time = dayjs(timestamp);
	return time.isValid() ? time.format(format) : '—';
});

