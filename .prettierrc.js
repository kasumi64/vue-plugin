module.exports = {
	"printWidth": 200, // 编辑器每行的长度，默认80
	"tabWidth": 4, //制表符tab的宽度，默认值是2
	"useTabs": true, // 使用tab缩进，默认false
	"semi": true, // 使用分号, 默认true
	"singleQuote": true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
	"trailingComma": 'none', //末尾逗号 可选 none|es5|all
	"bracketSpacing": true, //对象中的空格 默认true, true: { foo: bar } false: {foo: bar}
	"quoteProps": "as-needed", //对象属性的引号使用, as-needed 仅在需要的时候使用, consistent 有一个属性需要引号，就都需要引号, preserve 保留用户输入的情况
	"arrowParens": "avoid",
	// false: <div
	//          className=""
	//          style={{}}
	//       >
	// true: <div
	//          className=""
	//          style={{}} >
	"jsxBracketSameLine": true, //JSX标签闭合位置 默认false,
	"arrowParens": "avoid" // 箭头函数参数括号 默认avoid 可选 avoid| always。"avoid" - 能省略括号的时候就省略 例如x => x, "always" - 一直使用. Example: (x) => x
};
