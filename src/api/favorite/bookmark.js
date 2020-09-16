import axios from '../axios.js'


var bookmark = process.env.NODE_ENV == 'production' ? require('./booktag.json') : require('./bookmark.json');

export const getFavorites = params => {
	return Promise.resolve(bookmark);
};

if(process.env.NODE_ENV != 'production'){
	function readTextFile() {
		let url = 'bookmark';
		return axios.get(`${location.origin}/${url}.html`).then(res => {
			var bk = document.createElement('div');
			bk.innerHTML = res;
			bk.querySelectorAll('p').forEach(item => item.parentNode.removeChild(item));
			
			var favorites = parseList(bk.querySelector('dl').querySelector('dl'))
			console.log('readTextFile: ', favorites);
			writeTextFile(favorites, "text/latex", "bookmark.json");
		}).catch(()=>Promise.stop());
	}

	function parseList({children}){
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
				obj[item.children[0].innerText] = parseList(item.children[1]);
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

	// writeTextFile(test, "text/latex", "bookmark.json");
}