// 原文链接：https://blog.csdn.net/Allen_Fei_/article/details/82691420
// console.log(process.env.NODE_ENV);
const path = require('path');

module.exports = {
	// 部署应用时的基本 URL(从 Vue CLI 3.3 起已弃用，请使用publicPath。)
	// baseUrl: process.env.NODE_ENV === 'production' ? '192.168.60.110:8080' : '192.168.60.110:8080',
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist",
	// eslint-loader 是否在保存的时候检查
	// build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
	assetsDir: "static",
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	indexPath: "index.html",
	// 默认在生成的静态资源文件名中包含hash以控制缓存
	filenameHashing: true,
	configureWebpack: {
		resolve: {
			alias: {
				// '@': path.join(__dirname, './src'),
				// '#': path.join(__dirname, '..', '/public'),
				'@libs': path.join(__dirname, './src/libs'),
				'@package': path.join(__dirname, 'src/libs/package'),
				'@utils': path.join(__dirname, './src/libs/utils.js')
			}
		}
	},
	pages: {
		index: {
			// page 的入口
			entry: "src/main.js",
			// 模板来源
			template: "public/index.html",
			// 在 dist/index.html 的输出
			filename: "index.html",
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: "fbcs_配置系统",
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ["chunk-vendors", "chunk-common", "index"]
		}
		// 当使用只有入口的字符串格式时，
		// 模板会被推导为 `public/subpage.html`
		// 并且如果找不到的话，就回退到 `public/index.html`。
		// 输出文件名会被推导为 `subpage.html`。
		// subpage: 'src/subpage/main.js'
	},
	// 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
	// intOnSave: process.env.NODE_ENV !== 'production',
	// 是否使用包含运行时编译器的 Vue 构建版本
	runtimeCompiler: false,
	// Babel 显式转译列表
	transpileDependencies: [],
	// 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
	productionSourceMap: false,
	// 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
	crossorigin: undefined,
	// 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
	integrity: false,
	// 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
	// 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
	configureWebpack: {},
	// 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
	chainWebpack: () => {},
	// use the full build with in-browser compiler?
	// https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
	// compiler: false,

	// vue-loader 配置项
	// https://vue-loader.vuejs.org/en/options.html
	// vueLoader: {},
	// css相关配置
	css: {
		// 从 v4 起已弃用，请使用css.requireModuleExtension。 在 v3 中，这个选项含义与 css.requireModuleExtension 相反。
		// modules: true,
		// 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 false 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
		requireModuleExtension: true,
		// 是否使用css分离插件 ExtractTextPlugin
		extract: true,
		// 开启 CSS source maps?
		sourceMap: false,
		// css预设器配置项,向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
		loaderOptions: {
			// less: {}, scss:{}, css: {}
		}
	},
	// 是否为 Babel 或 TypeScript 使用 thread-loader
	parallel: require("os").cpus().length > 1,
	// 是否启用dll
	// See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
	// dll: false,
	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},
	// webpack-dev-server 相关配置
	devServer: {
		open: process.env.NODE_ENV === "development",
		host: "0.0.0.0", // 设置为0.0.0.0则所有的地址均能访问
		port: 8080,
		https: false,
		hotOnly: false,
		stats: "errors-only",
		compress: false,
		before: app => {}
		// proxy: { // 设置代理
		// 	'/api': {
		// 		target: '<url>',
		// 		ws: true,
		// 		changeOrigin: true
		// 	},
		// 	'/foo': {
		// 		target: '<other_url>'
		// 	}
		// }
	},
	// 第三方插件配置
	pluginOptions: {
		// ...
	}
};
