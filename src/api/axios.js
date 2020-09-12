import axios from 'axios'


// create an axios instance
const http = axios.create({
	baseURL: 'http://127.0.0.1/',
	timeout: 3 * 1000, // request timeout
	headers: {
		Accept: "application/json, text/plain, */*", 
		//multipart/form-data 文件上传  application/octet-stream 文件下载 application/x-www-form-urlencoded form表单
		"Content-Type": "application/json;charset=utf-8"
		
	}
});

// request interceptor
http.interceptors.request.use(
	(config) => {
		// config.headers.Authorization = 'Bearer ${token}';
		// console.log('config',config);
		return config;
	},
	(error) => {
		// Do something with request error
		console.log('axios-requestErr:',error); // for debug
		Promise.reject(error);
	},
);

// respone interceptor
http.interceptors.response.use(
	(response) => {
		// 返回响应时做一些处理
		if (response.status == 200) {
			return response.data;
		}
		console.log('axios-statusErr:', response);
		//  后端报错
		return Promise.reject(response);
	},
	(error) => {
		console.log('axios-responseErr:', [error]); // for debug
		// 超时
		if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') != -1) {
			return Promise.reject({code: 'timeout'});
		} else if(error.message == 'Network Error') { //断网
			return Promise.reject({code: 'offline'});
		}
		return Promise.reject(error);
	},
);

export default http
