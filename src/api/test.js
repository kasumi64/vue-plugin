import axios from './axios.js'



const module = '/vue-plugin/test';



export const testGet = (obj) => {
	console.log('testGet', obj);
	return axios.get(`${module}/get`, {
		params: obj
	});
};

export const testPost = (obj) => {
	console.log('testPost', obj);
	return axios.post(`${module}/post`, obj);
};

const requestUrl = {
	'手机号码信息': 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=${num}',
	'百度输入提示': 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&cb=_InputTips&wd=${keyword}',
	'爱奇艺': 'http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=jsonp9',
	'搜狐IP地址查询接口':' http://pv.sohu.com/cityjson',
	//https://suggest.video.iqiyi.com/?rltnum=2&platform=1&key=海贼王
}

export const getGoods = keyword => {
	return axios.get(`https://www.baidu.com/s?wd=js 爬虫`);
};

export const getBaiduInputTips = keyword => {
	return new Promise((resolve, reject) => {
		var es = document.createElement('script');
		es.src = `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&cb=_InputTips&wd=${keyword}`;
		es.onload = () => {
			es.onload = null;
			document.body.removeChild(es);
			resolve(window._InputTips.response.g);
		} 
		document.body.appendChild(es)
	});
};

export const getList = () => {
	return new Promise((resolve, reject) => {
		var es = document.createElement('script');
		es.src = `http://cache.video.iqiyi.com/jp/avlist/202861101/1/?callback=_CrossDomainSearch`;
		es.onload = function (e) {
			es.onload = null;
			document.body.removeChild(es);
			console.dir(e);
			resolve(window._CrossDomainSearch.response);
		} 
		document.body.appendChild(es)
	});
};

//https://www.baidu.com/s?wd=星辰变&pn=80&oq=星辰变&rn=20&ie=utf-8&usm=6 //内容列表
//excutor Storage victory
window._InputTips = function(res){
	window._InputTips.response = res;
}
window._CrossDomainSearch = function(res){
	window._CrossDomainSearch.response = res;
}



