module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-mixed-spaces-and-tabs': 0,
		'no-useless-escape': 0, //不必要的转义通知
		'no-unused-vars': 0, //变量声明未使用
		'no-inner-declarations': 0, //函数声明只允许在程序的第一级或其他函数的主体中使用
		// "indent": ["warning", "tab"],
		// 'no-extra-semi': 0, //不必要的分号
		// 'no-undef': 0, //使用未声明的变量
		
	}
}
