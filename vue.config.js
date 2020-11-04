const path = require('path');

function join(directory){return path.join(__dirname, directory);}
function resolve(directory){return path.resolve(__dirname, directory);}

module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	outputDir: "dist",
	assetsDir: "static",
	indexPath: "index.html",
	filenameHashing: false,
	productionSourceMap: false,
	// devtool: 'nosources-source-map',
	/* pages: {
		index: {
			entry: './src/projects/p1/main.js',
			template: 'public/index.html',
			filename: 'index.html'
		},
		about: {
			entry: './src/projects/p2/main.js',
			template: 'public/index.html',
			filename: 'about.html'
		}
	}, */
	configureWebpack: {
		resolve: {
			alias: {
				// '@': path.join(__dirname, './src'),
				// '#': path.join(__dirname, '..', '/public'),
				'@api': path.join(__dirname, './src/api/api.js'),
				'@libs': path.join(__dirname, './src/libs'),
				'@package': path.join(__dirname, 'src/libs/package'),
				'@utils': path.join(__dirname, './src/libs/utils.js'),
				'@sprite': path.join(__dirname, './src/libs/sprites/MovieClip.js')
			}
		},
		// externals: {} //忽略文件 
	},
	chainWebpack: config => {
		/* @scss是你取的静态资源路径别名, 若需要配置多个别名，后续紧跟着设置set即可
		config.resolve.alias.set('~scss', resolve('src/static/scss')).set('~',resolve('src')) */
		config.resolve.alias.set('~style', resolve('./src/libs/stle.scss'));
	},
	/* css: {
		loaderOptions: { // 给 sass-loader 传递选项，这里配置的是全局导入
			sass: {
				data: `@import "@scss/index.scss";` // @scss 是 src/static/scss 的别名
			}
		}
	}, */
	devServer: {
		compress: false,
		// host: '127.0.0.1',
		port: 5020,
		https: false,
		hot: true,
		hotOnly: true,
		open: true,
		proxy: { //'http://localhost:4000'
			// '/example': {
			// 	target: 'http://www.example.org', // target host
			// 	changeOrigin: true, // needed for virtual hosted sites
			// 	ws: true, // proxy websockets
			// 	pathRewrite: {
			// 		'^/api/old-path': '/api/new-path', // rewrite path
			// 		'^/api/remove/path': '/path' // remove base path
			// 	},
			// 	router: {
			// 		// when request.headers.host == 'dev.localhost:3000',
			// 		// override target 'http://www.example.org' to 'http://localhost:8000'
			// 		'dev.localhost:3000': 'http://localhost:8000'
			// 	}
			// },
			'/api/v1/mop': {
				target: 'https://finchat-mop-saas.finogeeks.club',
				changeOrigin: true
			}
		}
	}
	
};
