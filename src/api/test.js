import axios from './axios.js'

// console.log(axios);

// 获取供应商的SDK详情
// https://finchat-mop-saas.finogeeks.club/api/v1/mop/mop-sdk-manager/organ/querySdk?sdkId=5efaf7e09efdb500012efdd4&sequence=-1

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

export const getGoods = keyword => {
	return axios.get(`http://suggest.taobao.com/sug?code=utf-8&q=${keyword}`).catch(e => Promise.stop(e));
};