import axios from '../axios.js'
import { writeTextFile } from '@utils'


const folder = process.env.NODE_ENV == 'production' ? require('./booktag.json') : require('./chrome.json');
function parseFolder(folder) {
	var arr = [];
	for (let k in folder) {
		let obj = folder[k];
		if(obj.children) arr = arr.concat(parseFolder(obj.children));
		else arr.push(obj);
	}
	return arr;
}
const bookmark = parseFolder(folder);
const bookLength = bookmark.length;

export const getFavorites = ({page, size, keyword}) => {
	var end = page * size || 10, start = end - size, arr = [];
	if(start < 0) start = 0;
	if(end > bookLength) end = bookLength;
	var total = 0;
	keyword = keyword.toUpperCase();
	if(keyword){
		for (let i = 0; i < bookLength; i++) {
			let obj = bookmark[i];
			let name = obj.name.toUpperCase();
			if(name.includes(keyword)){
				total++;
				if(total>=start && total<end){
					arr.push(obj);
				}
			}
		}
	} else {
		for (let i = start; i < end; i++) {
			arr.push(bookmark[i]);
		}
		total = bookLength;
	}
	return Promise.resolve({data: arr, total});
};

if(process.env.NODE_ENV != 'production'){
	function readTextFile() {
		let url = 'chrome_';
		return axios.get(`${location.origin}/${url}.html`).then(res => {
			var bk = document.createElement('div');
			bk.innerHTML = res;
			bk.querySelectorAll('p').forEach(item => item.parentNode.removeChild(item));
			
			var favorites = parseHtml(bk.querySelector('dl').querySelector('dl'))
			console.log('readTextFile: ', favorites);
			writeTextFile(favorites, "chrome.json");
		}).catch(()=>Promise.stop());
	}

	function parseHtml({children}){
		var obj = Object.create(null);
		children.forEach(item => {
			if(item.children.length == 1){
				let a = item.children[0];
				let o = Object.create(null);
				o.name = a.innerText;
				o.href = a.href;
				o.icon = a.getAttribute('icon');
				obj[o.name] = o;
			} else {
				obj[item.children[0].innerText] = {children: parseHtml(item.children[1])};
			}
		});
		return obj;
	}

	

	// readTextFile();
	// cityCode();
}

function cityCode(){
		
	// code: '城市代码', city: '城市名称', parentNode: '省节点', postcode: '邮编', abbrev: '简称', pCapital: '省会', 
	// areaCode: '区号', area :'100万平方千米', licensePlate: '车牌号', describe: '描述'
	var cityJson, sql = {
		code: '', city: '', parentNode: '', postcode: '', abbrev: '', pCapital: '', 
		areaCode: '', area :'', licensePlate: '', describe: ''
	};
	cityJson = {};
	cityJson = require('./citys.json');
	
	var arr = ('华北,东北,华东,华中,华南,西南,西北,港澳台地区').split(',');
	var eara = [
		['北京市','天津市','河北省','山西省','内蒙古自治区'],
		['辽宁省','吉林省','黑龙江省'],
		['上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省'],
		['河南省','湖北省','湖南省'],
		['广东省','广西壮族自治区','海南省'],
		['重庆市','四川省','贵州省','云南省','西藏自治区'],
		['陕西省','甘肃省','青海省','宁夏回族自治区','新疆维吾尔自治区'],
		['香港特别行政区','澳门特别行政区','台湾省']
	];
	eara.forEach((arr, i) => {
		var code = '0' + (++i)
		arr.forEach(str => {
			let obj = cityJson[str]
			obj.parentNode = code;
		})
	})
	// console.log(cityJson);
	
	// writeTextFile(cityJson, "citys.json");

}
