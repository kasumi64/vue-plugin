function isPC(){
	var mobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
	if (navigator.userAgent.match(mobile)) {
		console.log('移动端');
		return false;
	}else{
		console.log('PC端');
		return true;
	}
}

function isVertical(){
	let orient = window.orientation;
	//竖屏状态
	if (orient === 0 || orient === 180) return true;
	else return false;
}


(function fix(){
	// console.log(document.documentElement.clientWidth, window.innerWidth, window.outerWidth, screen.width);
	// console.log('竖屏状态', isVertical());
	let w = Math.min(screen.width, screen.height);
	let size = w * 100 / 750;
	if(isPC() || w > 1024) size = 100;
	document.documentElement.style.fontSize = size + 'px';
})()
