module.exports = {
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	outputDir: "dist",
	assetsDir: "static",
	indexPath: "index.html",
	filenameHashing: false,
	productionSourceMap: false,
	// devtool: 'nosources-source-map',
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
};
