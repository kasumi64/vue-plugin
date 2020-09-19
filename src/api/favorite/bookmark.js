import axios from '../axios.js'


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
			writeTextFile(favorites, "text/latex", "chrome.json");
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

	function writeTextFile(json, type, name) {
		var blob = new Blob([JSON.stringify(json)], { type });
		var URL = window.URL || window.webkitURL;
		var bloburl = URL.createObjectURL(blob);
		var anchor = document.createElement("a");
		anchor.style.visibility = "hidden";
		anchor.href = bloburl;
		anchor.download = name;
		document.body.appendChild(anchor);
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, true);
		anchor.dispatchEvent(evt);
		document.body.removeChild(anchor);
	}

	// readTextFile();
}