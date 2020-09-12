
/* directory {String} -读取文件的路径
useSubdirectories {Boolean} -是否遍历文件的子目录
regExp {RegExp} -匹配文件的正则
@ return fn(); 返回的是一个函数,并且这个函数有3个属性
@ resolve全路径, keys文件, id 
require.context(directory, useSubdirectories, regExp)
*/

const files = require.context('../assets/svg', true, /\.(js)$/);
// const requireAll = requireContext => requireContext.keys().map(requireContext);
// requireAll(files);
// 加载目录下的所有 svg 文件
const fileMap = files.keys().map(files);
module.exports = fileMap;
// var toString = {}.toString;
// var arr = [];
// fileMap.forEach(obj => {
// 	if(toString.call(obj) === '[object Module]'){
// 		let i = 0;
// 		for(let k in obj){
// 			if(++i >= 2){k;break;}
// 		}
// 		if(i == 1)arr.push(obj.default);
// 		else arr.push({...obj});
// 	} else arr.push(obj);
// })
// console.dir(files);
// console.log(fileMap);
// console.log(arr);
